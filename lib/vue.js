module.exports = {
	"rules": {
		"vue/html-indent": [
			"error",
			"tab",
			{
				"attribute": 1,
				"baseIndent": 1,
				"closeBracket": 0,
				"alignAttributesVertically": true,
				"ignores": []
			}
		],
		"vue/max-attributes-per-line": [
			"error",
			{
				"singleline": {
					"max": 2
				},
				"multiline": {
					"max": 1
				}
			}
		],
		"vue/html-closing-bracket-newline": [
			"error",
			{
				"singleline": "never",
				"multiline": "never"
			}
		],
		"vue/html-closing-bracket-spacing": [
			"error",
			{
				"startTag": "never",
				"endTag": "never",
				"selfClosingTag": "never"
			}
		],
		"vue/component-tags-order": [
			"error",
			{
				"order": [
					"script",
					"template",
					"style"
				]
			}
		],
		"vue/sort-keys": [
			"warn",
			"asc",
			{
				"caseSensitive": true,
				"ignoreChildrenOf": [
					"methods"
				],
				"ignoreGrandchildrenOf": [
					"directives",
					"inject",
					"watch"
				],
				"minKeys": 2,
				"natural": false
			}
		],
		"vue/html-self-closing": [
			"error",
			{
				"html": {
					"void": "always",
					"normal": "never",
					"component": "always"
				},
				"svg": "always",
				"math": "always"
			}
		],
		"vue/order-in-components": [
			"error",
			{
				"order": [
					"el",
					"name",
					"key",
					"parent",
					"functional",
					[
						"delimiters",
						"comments"
					],
					[
						"directives",
						"filters"
					],
					"extends",
					"mixins",
					[
						"provide",
						"inject"
					],
					"ROUTER_GUARDS",
					"layout",
					"middleware",
					"validate",
					"scrollToTop",
					"transition",
					"loading",
					"inheritAttrs",
					"model",
					[
						"props",
						"propsData"
					],
					"emits",
					"components",
					"setup",
					"asyncData",
					"data",
					"fetch",
					"head",
					"computed",
					"watch",
					"watchQuery",
					"LIFECYCLE_HOOKS",
					"methods",
					[
						"template",
						"render"
					],
					"renderError"
				]
			}
		]
	}
}
