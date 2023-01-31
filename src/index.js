module.exports = {
	"extends": [
		"eslint:all"
	],
	"rules": {
		"array-bracket-newline": [
			"error",
			"consistent"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"array-element-newline": [
			"error",
			"consistent"
		],
		"arrow-parens": [
			"error",
			"as-needed",
			{
				"requireForBlockBody": false
			}
		],
		"brace-style": [
			"error",
			"1tbs",
			{
				"allowSingleLine": true
			}
		],
		"dot-location": [
			"error",
			"property"
		],
		"default-case": "warn",
		"class-methods-use-this": "warn",
		"curly": [
			"error",
			"multi-line",
			"consistent"
		],
		"func-style": [
			"error",
			"declaration",
			{
				"allowArrowFunctions": true
			}
		],
		"func-names": "off",
		"function-call-argument-newline": [
			"error",
			"consistent"
		],
		"function-paren-newline": "off",
		"generator-star-spacing": [
			"error",
			"after"
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"id-length": [
			"error",
			{
				"exceptions": [
					"i",
					"j",
					"k",
					"l"
				]
			}
		],
		"lines-around-comment": [
			"warn",
			{
				"allowClassStart": true,
				"beforeBlockComment": false
			}
		],
		"max-len": [
			"error",
			{
				"code": 100,
				"tabWidth": 3
			}
		],
		"max-lines": [
			"error",
			{
				"skipBlankLines": true,
				"skipComments": true
			}
		],
		"max-classes-per-file": [
			"error",
			2
		],
		"max-params": [
			"error",
			6
		],
		"max-statements": "off",
		"multiline-ternary": [
			"error",
			"always-multiline"
		],
		"new-cap": [
			"error",
			{
				"capIsNewExceptions": [
					"Selector"
				]
			}
		],
		"no-alert": "off",
		"no-empty-function": [
			"error",
			{
				"allow": [
					"arrowFunctions"
				]
			}
		],
		"no-console": "off",
		"no-underscore-dangle": "off",
		"no-lonely-if": "error",
		"no-tabs": [
			"error",
			{
				"allowIndentationTabs": true
			}
		],
		"no-ternary": "off",
		"no-plusplus": "off",
		"no-unmodified-loop-condition": "off",
		"no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_"
			}
		],
		"no-use-before-define": "warn",
		"no-useless-constructor": "warn",
		"no-undef": "warn",
		"no-magic-numbers": [
			"warn",
			{
				"ignore": [
					-1,
					0,
					1,
					2,
					200,
					404
				]
			}
		],
		"no-mixed-operators": "off",
		"no-warning-comments": "off",
		"padded-blocks": [
			"error",
			"never"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"one-var": [
			"error",
			"never"
		],
		"operator-linebreak": [
			"error",
			"before"
		],
		"prefer-named-capture-group": "warn",
		"space-before-function-paren": [
			"error",
			"never"
		],
		"sort-imports": [
			"error",
			{
				"allowSeparatedGroups": true,
				"memberSyntaxSortOrder": [
					"none",
					"all",
					"single",
					"multiple"
				]
			}
		],
		"sort-keys": "off",
		"quotes": [
			"error",
			"double",
			{
				"avoidEscape": true
			}
		]
	}
}
