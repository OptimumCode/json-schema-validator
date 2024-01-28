package io.github.optimumcode.json.schema.internal.wellknown

internal enum class Draft202012(val content: String) {
  DRAFT202012_CORE_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/core",
    "${"$"}dynamicAnchor": "meta",

    "title": "Core vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "${"$"}id": {
            "${"$"}ref": "#/${"$"}defs/uriReferenceString",
            "${"$"}comment": "Non-empty fragments not allowed.",
            "pattern": "^[^#]*#?${'$'}"
        },
        "${"$"}schema": { "${"$"}ref": "#/${"$"}defs/uriString" },
        "${"$"}ref": { "${"$"}ref": "#/${"$"}defs/uriReferenceString" },
        "${"$"}anchor": { "${"$"}ref": "#/${"$"}defs/anchorString" },
        "${"$"}dynamicRef": { "${"$"}ref": "#/${"$"}defs/uriReferenceString" },
        "${"$"}dynamicAnchor": { "${"$"}ref": "#/${"$"}defs/anchorString" },
        "${"$"}vocabulary": {
            "type": "object",
            "propertyNames": { "${"$"}ref": "#/${"$"}defs/uriString" },
            "additionalProperties": {
                "type": "boolean"
            }
        },
        "${"$"}comment": {
            "type": "string"
        },
        "${"$"}defs": {
            "type": "object",
            "additionalProperties": { "${"$"}dynamicRef": "#meta" }
        }
    },
    "${"$"}defs": {
        "anchorString": {
            "type": "string",
            "pattern": "^[A-Za-z_][-A-Za-z0-9._]*${'$'}"
        },
        "uriString": {
            "type": "string",
            "format": "uri"
        },
        "uriReferenceString": {
            "type": "string",
            "format": "uri-reference"
        }
    }
}
""",
  ),
  DRAFT202012_APPLICATOR_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/applicator",
    "${"$"}dynamicAnchor": "meta",

    "title": "Applicator vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "prefixItems": { "${"$"}ref": "#/${"$"}defs/schemaArray" },
        "items": { "${"$"}dynamicRef": "#meta" },
        "contains": { "${"$"}dynamicRef": "#meta" },
        "additionalProperties": { "${"$"}dynamicRef": "#meta" },
        "properties": {
            "type": "object",
            "additionalProperties": { "${"$"}dynamicRef": "#meta" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "${"$"}dynamicRef": "#meta" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependentSchemas": {
            "type": "object",
            "additionalProperties": { "${"$"}dynamicRef": "#meta" },
            "default": {}
        },
        "propertyNames": { "${"$"}dynamicRef": "#meta" },
        "if": { "${"$"}dynamicRef": "#meta" },
        "then": { "${"$"}dynamicRef": "#meta" },
        "else": { "${"$"}dynamicRef": "#meta" },
        "allOf": { "${"$"}ref": "#/${"$"}defs/schemaArray" },
        "anyOf": { "${"$"}ref": "#/${"$"}defs/schemaArray" },
        "oneOf": { "${"$"}ref": "#/${"$"}defs/schemaArray" },
        "not": { "${"$"}dynamicRef": "#meta" }
    },
    "${"$"}defs": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "${"$"}dynamicRef": "#meta" }
        }
    }
}
""",
  ),
  DRAFT202012_VALIDATION_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/validation",
    "${"$"}dynamicAnchor": "meta",

    "title": "Validation vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "type": {
            "anyOf": [
                { "${"$"}ref": "#/${"$"}defs/simpleTypes" },
                {
                    "type": "array",
                    "items": { "${"$"}ref": "#/${"$"}defs/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        },
        "const": true,
        "enum": {
            "type": "array",
            "items": true
        },
        "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "number"
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "number"
        },
        "maxLength": { "${"$"}ref": "#/${"$"}defs/nonNegativeInteger" },
        "minLength": { "${"$"}ref": "#/${"$"}defs/nonNegativeIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "maxItems": { "${"$"}ref": "#/${"$"}defs/nonNegativeInteger" },
        "minItems": { "${"$"}ref": "#/${"$"}defs/nonNegativeIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "maxContains": { "${"$"}ref": "#/${"$"}defs/nonNegativeInteger" },
        "minContains": {
            "${"$"}ref": "#/${"$"}defs/nonNegativeInteger",
            "default": 1
        },
        "maxProperties": { "${"$"}ref": "#/${"$"}defs/nonNegativeInteger" },
        "minProperties": { "${"$"}ref": "#/${"$"}defs/nonNegativeIntegerDefault0" },
        "required": { "${"$"}ref": "#/${"$"}defs/stringArray" },
        "dependentRequired": {
            "type": "object",
            "additionalProperties": {
                "${"$"}ref": "#/${"$"}defs/stringArray"
            }
        }
    },
    "${"$"}defs": {
        "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
            "${"$"}ref": "#/${"$"}defs/nonNegativeInteger",
            "default": 0
        },
        "simpleTypes": {
            "enum": [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
        }
    }
}
""",
  ),
  DRAFT202012_FORMAT_ANNOTATION_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/format-annotation",
    "${"$"}dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for annotation results",
    "type": ["object", "boolean"],
    "properties": {
        "format": { "type": "string" }
    }
}
""",
  ),
  DRAFT202012_FORMAT_ASSERTION_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/format-assertion",
    "${"$"}dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for assertion results",
    "type": ["object", "boolean"],
    "properties": {
        "format": { "type": "string" }
    }
}
""",
  ),
  DRAFT202012_CONTENT_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/content",
    "${"$"}dynamicAnchor": "meta",

    "title": "Content vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "contentEncoding": { "type": "string" },
        "contentMediaType": { "type": "string" },
        "contentSchema": { "${"$"}dynamicRef": "#meta" }
    }
}
""",
  ),
  DRAFT202012_META_DATA_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/meta-data",
    "${"$"}dynamicAnchor": "meta",

    "title": "Meta-data vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": true,
        "deprecated": {
            "type": "boolean",
            "default": false
        },
        "readOnly": {
            "type": "boolean",
            "default": false
        },
        "writeOnly": {
            "type": "boolean",
            "default": false
        },
        "examples": {
            "type": "array",
            "items": true
        }
    }
}
""",
  ),
  DRAFT202012_UNEVALUATED_VOCABULARY(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/meta/unevaluated",
    "${"$"}dynamicAnchor": "meta",

    "title": "Unevaluated applicator vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "unevaluatedItems": { "${"$"}dynamicRef": "#meta" },
        "unevaluatedProperties": { "${"$"}dynamicRef": "#meta" }
    }
}
""",
  ),
  DRAFT202012_SCHEMA(
    """
{
    "${"$"}schema": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}id": "https://json-schema.org/draft/2020-12/schema",
    "${"$"}vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": true,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
        "https://json-schema.org/draft/2020-12/vocab/content": true
    },
    "${"$"}dynamicAnchor": "meta",

    "title": "Core and Validation specifications meta-schema",
    "allOf": [
        {"${"$"}ref": "meta/core"},
        {"${"$"}ref": "meta/applicator"},
        {"${"$"}ref": "meta/unevaluated"},
        {"${"$"}ref": "meta/validation"},
        {"${"$"}ref": "meta/meta-data"},
        {"${"$"}ref": "meta/format-annotation"},
        {"${"$"}ref": "meta/content"}
    ],
    "type": ["object", "boolean"],
    "${"$"}comment": "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
    "properties": {
        "definitions": {
            "${"$"}comment": "\"definitions\" has been replaced by \"${"$"}defs\".",
            "type": "object",
            "additionalProperties": { "${"$"}dynamicRef": "#meta" },
            "deprecated": true,
            "default": {}
        },
        "dependencies": {
            "${"$"}comment": "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "${"$"}dynamicRef": "#meta" },
                    { "${"$"}ref": "meta/validation#/${"$"}defs/stringArray" }
                ]
            },
            "deprecated": true,
            "default": {}
        },
        "${"$"}recursiveAnchor": {
            "${"$"}comment": "\"${"$"}recursiveAnchor\" has been replaced by \"${"$"}dynamicAnchor\".",
            "${"$"}ref": "meta/core#/${"$"}defs/anchorString",
            "deprecated": true
        },
        "${"$"}recursiveRef": {
            "${"$"}comment": "\"${"$"}recursiveRef\" has been replaced by \"${"$"}dynamicRef\".",
            "${"$"}ref": "meta/core#/${"$"}defs/uriReferenceString",
            "deprecated": true
        }
    }
}
""",
  ),
}