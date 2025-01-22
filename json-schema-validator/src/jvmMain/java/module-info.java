module io.github.optimumcode.json.schema {
  requires kotlin.stdlib;
  requires transitive kotlinx.serialization.json;

  exports io.github.optimumcode.json.schema;
  exports io.github.optimumcode.json.schema.model;
  exports io.github.optimumcode.json.schema.extension;
  exports io.github.optimumcode.json.pointer;
}