module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "plugin:vue/recommended",
    "@vue/eslint-config-airbnb-with-typescript",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: {
      ts: "@typescript-eslint/parser",
      "<template>": "espree",
    },
  },
  plugins: [
    "import",
    "vue",
    "newline-destructuring",
  ],
  rules: {
    "linebreak-style": "off",
    // this rules requires parserOptions.project to be set
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/return-await": "off",

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "no-trailing-spaces": [
      "error", {
        skipBlankLines: false,
        ignoreComments: true,
      },
    ],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "vue/max-len": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "break",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "if",
      },

      {
        blankLine: "always",
        prev: "if",
        next: "*",
      },
    ],
    "no-console": [
      "error",
      { allow: ["warn", "error"] },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    quotes: "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: true },
    ],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        enums: "always-multiline",
        generics: "always-multiline",
        tuples: "always-multiline",
        functions: "never",
      },
    ],
    "object-curly-newline": [
      "error",
      {
        multiline: true,
        minProperties: 4,
        consistent: true,
      },
    ],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
    "array-bracket-newline": [
      "error",
      { multiline: true },
    ],
    "array-element-newline": "off",
    "newline-destructuring/newline": [
      "error",
      { items: 3 },
    ],
    "function-paren-newline": [
      "error",
      "multiline-arguments",
    ],
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": [
      "error",
      {
        enforce: [
          {
            blankLine: "always",
            prev: "*",
            next: "field",
          },
          {
            blankLine: "never",
            prev: "field",
            next: "field",
          },
          {
            blankLine: "always",
            prev: "field",
            next: "method",
          },
          {
            blankLine: "always",
            prev: "method",
            next: "method",
          },
        ],
      },
    ],
    "arrow-body-style": "off",
    "no-underscore-dangle": "off",
    // "no-shadow": "off",
    // "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/naming-convention": "off",
    "max-classes-per-file": "off",

    "vuejs-accessibility/click-events-have-key-events": "off",
    "vuejs-accessibility/label-has-for": "off",
    "vuejs-accessibility/mouse-events-have-key-events": "off",
    "vuejs-accessibility/aria-role": "off",
    "vuejs-accessibility/media-has-caption": "off",
    "vuejs-accessibility/form-control-has-label": "off",
    "vuejs-accessibility/no-autofocus": "off",
    "vuejs-accessibility/iframe-has-title": "off",
    "vuejs-accessibility/alt-text": "off",

    "vue/no-v-for-template-key": "off",
    "vue/no-v-for-template-key-on-child": "error",
    "vue/html-self-closing": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-model-argument": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
  },
};
