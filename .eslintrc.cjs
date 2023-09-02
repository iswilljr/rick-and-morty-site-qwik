// @ts-check

/** @type {import("eslint").ESLint.ConfigData["rules"]} */
const disabledTypescriptEslintRules = {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/no-misused-promises': 'off',
}

/** @type {import("eslint").ESLint.ConfigData} */
const eslintConfig = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:astro/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...disabledTypescriptEslintRules,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  overrides: [
    {
      files: ['*.astro'],
      extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        ...disabledTypescriptEslintRules,
      },
    },
  ],
}

module.exports = eslintConfig
