import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/semi": "error",
      "no-var": "error",
      "@stylistic/quotes": "error",
      eqeqeq: ["error", "smart"], // ["error", "always"]
      indent: ["error", "tab"],
    },
  },
  globalIgnores(["eslint.config.js"]),
]);
