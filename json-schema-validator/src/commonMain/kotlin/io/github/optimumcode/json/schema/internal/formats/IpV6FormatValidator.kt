package io.github.optimumcode.json.schema.internal.formats

import io.github.optimumcode.json.schema.FormatValidationResult
import io.github.optimumcode.json.schema.FormatValidator

internal object IpV6FormatValidator : AbstractStringFormatValidator() {
  private const val BLOCK_OCTETS_LENGTH = 4
  private const val V6_DELIMITER = ':'
  private const val SHORTEST_IP_V6 = "$V6_DELIMITER$V6_DELIMITER"
  private const val V4_DELIMITER = '.'
  private const val MAX_V6_BLOCKS = 8
  private const val MAX_V6_WITH_V4_BLOCKS = 6

  @Suppress("detekt:ReturnCount")
  override fun validate(value: String): FormatValidationResult {
    if (value.isEmpty() || value.length < SHORTEST_IP_V6.length) {
      return FormatValidator.Invalid()
    }
    if (value == SHORTEST_IP_V6) {
      return FormatValidator.Valid()
    }
    var blocks = 0
    var blockStartIndex = 0
    var isCompressedFormAppeared = false
    for ((index, symbol) in value.withIndex()) {
      when (symbol) {
        V6_DELIMITER -> {
          val blockSize = index - blockStartIndex
          val compressed = blockStartIndex > 0 && blockSize == 0
          if (compressed && isCompressedFormAppeared) {
            // can have only one '::'
            return FormatValidator.Invalid()
          }
          if (!checkBlock(index, value, blockStartIndex, blockSize)) {
            return FormatValidator.Invalid()
          }
          isCompressedFormAppeared = isCompressedFormAppeared or compressed
          blockStartIndex = index + 1
          blocks += 1
        }
        in '0'..'9', in 'A'..'F', in 'a'..'f', V4_DELIMITER -> continue
        // unexpected character
        else -> return FormatValidator.Invalid()
      }
    }
    val lastBlockSize = value.length - blockStartIndex
    // normal ipv6 block
    // don't count ip block
    if (lastBlockSize in 1..BLOCK_OCTETS_LENGTH) {
      blocks += 1
    }
    return checkLastBlock(value, blocks, lastBlockSize, isCompressedFormAppeared, blockStartIndex)
  }

  private fun checkLastBlock(
    value: String,
    blocks: Int,
    lastBlockSize: Int,
    isCompressedFormAppeared: Boolean,
    blockStartIndex: Int,
  ): FormatValidationResult {
    if (lastBlockSize == 0 && !isCompressedFormAppeared) {
      // last block cannot be empty
      return FormatValidator.Invalid()
    }
    if (blocks > MAX_V6_BLOCKS || blocks > MAX_V6_WITH_V4_BLOCKS && lastBlockSize > BLOCK_OCTETS_LENGTH) {
      return FormatValidator.Invalid()
    }
    if (!isCompressedFormAppeared && blocks != MAX_V6_BLOCKS && blocks != MAX_V6_WITH_V4_BLOCKS) {
      return FormatValidator.Invalid()
    }
    return if (checkBlockValue(
        value.substring(blockStartIndex),
        mustBeIp = blocks == MAX_V6_WITH_V4_BLOCKS && !isCompressedFormAppeared,
      )
    ) {
      FormatValidator.Valid()
    } else {
      FormatValidator.Invalid()
    }
  }

  private fun checkBlock(
    index: Int,
    value: String,
    blockStartIndex: Int,
    blockSize: Int,
  ): Boolean {
    if (blockSize > BLOCK_OCTETS_LENGTH) {
      return false
    }

    if (blockStartIndex == 0 && blockSize == 0 && value[index + 1] != V6_DELIMITER) {
      // first block cannot be empty if the next part is not compressed
      return false
    }
    if (blockSize > 0 && !checkBlockValue(value.substring(blockStartIndex, index))) {
      return false
    }
    return true
  }

  private fun checkBlockValue(
    block: String,
    mustBeIp: Boolean = false,
  ): Boolean {
    if (mustBeIp || block.length > BLOCK_OCTETS_LENGTH) {
      return IpV4FormatValidator.validate(block).isValid()
    }
    return V4_DELIMITER !in block
  }
}