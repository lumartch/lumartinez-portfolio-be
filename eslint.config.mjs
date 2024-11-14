import config from "eslint-config-standard";
import stylisticJs from "@stylistic/eslint-plugin-js";
import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["./src/**/*.{ts}"],
  },
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          vars: "all",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    rules: {
      "no-multi-spaces": ["error"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
  {
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      indent: ["error", 4],
      "space-before-function-paren": ["error"],
      "comma-spacing": ["error"],
      "arrow-spacing": ["error"],
      "object-curly-spacing": ["error", "always"],
    },
  },
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": "error",
    },
  },
  ...[].concat(config),
];
