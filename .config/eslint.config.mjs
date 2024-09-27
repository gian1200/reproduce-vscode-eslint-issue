import globals from "globals";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import html from "@html-eslint/eslint-plugin";
import stylisticJs from "@stylistic/eslint-plugin-js";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
	{
		"ignores": [".git", ".husky", ".scannerwork", ".vscode", "coverage", "dependency-check-bin", "dependency-check-reports", "dist", "node_modules", "target"],
		"name": "Archivos a ignorar"
	},
	{
		"files": ["**/*.{js,cjs,mjs}"],
		"languageOptions": {
			"ecmaVersion": 2024
		},
		"name": "Archivos JavaScript",
		"plugins": {
			"@stylistic": stylisticJs,
			"jsdoc": jsdoc
		},
		"rules": {
			...js.configs.recommended.rules,
			...jsdoc.configs["flat/recommended-typescript-flavor"].rules,
			"@stylistic/array-bracket-newline": ["error", "consistent"],
			"@stylistic/array-bracket-spacing": ["error", "never"],
			"@stylistic/array-element-newline": ["error", { "ArrayExpression": "consistent" }],
			"@stylistic/arrow-spacing": ["warn", { "before": true, "after": true }],
			"@stylistic/block-spacing": ["warn", "always"],
			"@stylistic/comma-dangle": ["error", "never"],
			"@stylistic/comma-spacing": ["warn", { "before": false, "after": true }],
			"@stylistic/func-call-spacing": ["error", "never"],
			"@stylistic/indent": ["warn", "tab"],
			"@stylistic/key-spacing": ["warn", { "afterColon": true }],
			"@stylistic/keyword-spacing": ["warn"],
			"@stylistic/linebreak-style": ["off"],
			"@stylistic/lines-around-comment": ["error"],
			"@stylistic/lines-between-class-members": ["error", "always"],
			"@stylistic/no-multi-spaces": ["warn"],
			"@stylistic/no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0 }],
			"@stylistic/no-trailing-spaces": ["warn"],
			"@stylistic/nonblock-statement-body-position": ["error", "below"],
			"@stylistic/object-curly-newline": ["error", { "consistent": true }],
			"@stylistic/object-curly-spacing": ["warn", "always"],
			"@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
			"@stylistic/padded-blocks": ["warn", { "blocks": "never", "classes": "always", "switches": "never" }, { "allowSingleLineBlocks": false }],
			"@stylistic/quote-props": ["warn"],
			"@stylistic/quotes": ["warn", "double", { "allowTemplateLiterals": true, "avoidEscape": true }],
			"@stylistic/semi": ["warn", "always"],
			"@stylistic/space-before-blocks": ["warn"],
			"@stylistic/space-infix-ops": ["warn"],
			"@stylistic/space-in-parens": ["warn", "never"],
			"array-callback-return": ["error"],
			"curly": ["error", "all"],
			"default-param-last": ["error"],
			"eqeqeq": ["error", "smart"],
			"grouped-accessor-pairs": ["error", "getBeforeSet"],
			"no-console": ["warn"],
			"no-debugger": ["warn"],
			"no-empty": ["warn"],
			"no-lonely-if": ["warn"],
			"no-multi-str": ["error"],
			"no-return-assign": ["error"],
			"no-shadow": ["warn", { "builtinGlobals": true, "hoist": "all" }],
			"no-unneeded-ternary": ["error"],
			"no-unused-vars": ["warn"],
			"no-var": ["error"],
			"prefer-const": ["warn"]
		}
	},
	{
		"files": ["**/*.mjs"],
		"name": "Módulos JavaScript",
		"languageOptions": {
			"sourceType": "module"
		}
	},
	{
		"files": ["src/app/**/*.{js,mjs}"],
		"name": "Archivos web",
		"languageOptions": {
			"ecmaVersion": 2022,
			"globals": {
				...globals.browser,
				...globals.jquery,
				"Chart": "readonly",
				"DataTable": "readable",
				"moment": "readonly",
				"saveAs": "readonly"
			}
		}
	},
	{
		"files": [".config/karma.conf.js", "**/*.{cjs,mjs}"],
		"name": "Archivos Node.js",
		"ignores": ["src/app/**/*"],
		"languageOptions": {
			"globals": {
				...globals.node
			}
		}
	},
	{
		"files": ["src/app/**/*.spec.*"],
		"name": "Pruebas web",
		"languageOptions": {
			"globals": {
				...globals.jasmine
			}
		}
	},
	{
		"files": ["src/server/**/*.spec.*", "scripts/**/*.spec.*"],
		"name": "Pruebas Node.js",
		"languageOptions": {
			"globals": {
				...globals.mocha
			}
		}
	},
	{
		"files": ["src/**/*.html"],
		"name": "Archivos HTML",
		...html.configs["flat/recommended"],
		"rules": {
			...html.configs["flat/recommended"].rules,
			"@html-eslint/attrs-newline": ["off"],
			// TODO Temporalmente desactivado hasta que implementen https://github.com/yeonjuan/html-eslint/issues/101. Debería usarse como WARN
			"@html-eslint/indent": ["off", "tab"],
			"@html-eslint/no-extra-spacing-attrs": ["warn", { "enforceBeforeSelfClose": true }],
			"@html-eslint/require-closing-tags": ["error", { "selfClosing": "always" }]
		}
	}
];
