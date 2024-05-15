/* import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    "rules": {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-unused-expression": "error",
      "@typescript-eslint/prefer-const": "error",
      "@typescript-eslint/no-console": "warn",
    },
  }
]; */