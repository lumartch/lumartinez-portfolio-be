import eslint from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";
import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["./src/**/*.{js, jsx, ts, tsx, mjs}"],
  },
  {
    ignores: [
      ".github/*",
      ".node_modules/*",
      ".next/*",
      ".vscode/*",
      "eslint.config.mjs",
    ],
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
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "space-before-function-paren": ["error"],
      "comma-spacing": ["error"],
      // "arrow-spacing": ["error"],
      "object-curly-spacing": ["error", "always"],
      // indent: ["error", 4],
      quotes: ["error", "single"],
      semi: ["error"],
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
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
];
