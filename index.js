import esLintPluginImport from "eslint-plugin-import";
import esLintPluginPrettier from "eslint-plugin-prettier/recommended";
import esLintPluginPromise from "eslint-plugin-promise";
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
const recommendedConfigs = [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { impliedStrict: true } },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
      reportUnusedInlineConfigs: "error",
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: { import: esLintPluginImport },
    rules: {
      // analysis/correctness
      "import/no-unresolved": ["error", { commonjs: true, amd: true }],
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",

      // red flags (thus, warnings)
      "import/no-named-as-default": "warn",
      "import/no-named-as-default-member": "warn",
      "import/no-duplicates": "warn",
    },
  },
  esLintPluginPromise.configs["flat/recommended"],
  esLintPluginPrettier,
  {
    rules: {
      // recommended
      "no-unused-vars": "warn",
      // suggested
      "arrow-body-style": ["error", "as-needed"],
      camelcase: "error",
      "class-methods-use-this": "error",
      curly: ["error", "all"],
      "dot-notation": "error",
      eqeqeq: "error",
      "func-names": ["error", "always"],
      "guard-for-in": "error",
      "no-console": "warn",
      "no-else-return": "error",
      "no-empty": "error",
      "no-empty-function": "error",
      "no-empty-static-block": "error",
      "no-invalid-this": "error",
      "no-label-var": "error",
      "no-loop-func": "error",
      "no-nested-ternary": "error",
      "no-param-reassign": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-unneeded-ternary": "error",
      "no-useless-catch": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "object-shorthand": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": "error",
      "prefer-object-has-own": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-template": "error",
      radix: "error",
      "require-await": "error",
      "require-yield": "error",
      "sort-imports": "error",
    },
  },
];

const configs = {
  recommended: [...recommendedConfigs, { name: "eslint-config-recommended" }],
  strict: [
    ...recommendedConfigs,
    { name: "eslint-config-strict" },
    {
      rules: {
        "no-console": "error",
        "no-debugger": "error",
        "no-alert": "error",
        "no-eval": "error",
        "no-implied-eval": "error",
      },
    },
  ],
};

export default configs;
