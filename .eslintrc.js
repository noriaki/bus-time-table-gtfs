/*
 * Usage:
 *
 *  $ yarn add --dev typescript // to avoid errors in `npx eslint --init`
 *  $ npx eslint --init         // select options and npm install (airbnb, ts)
 *  $ yarn add --dev eslint-config-airbnb-typescript // decorate airbnb with ts
 *  $ rm package-lock.json      // to not using npm
 *  $ yarn install              // to generate yarn.lock
 *  $ yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
 *  $ touch .eslintrc.js        // and edit (this file)
 *  $ touch prettier.config.js  // and edit
 *
 */

const allowExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.mjs', '.jsx'];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    node: true,
  },
  settings: {
    'import/extensions': allowExtensions,
    'import/resolver': {
      node: { extensions: [...allowExtensions, '.json'] },
      typescript: { alwaysTryTypes: true },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#recommended-configs
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // https://www.npmjs.com/package/eslint-config-airbnb-typescript#i-use-eslint-config-airbnb-base-no-react-support
    'airbnb-typescript/base',
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  // plugins: [
  //   '@typescript-eslint', // included in 'plugin:@typescript-eslint/recommended'
  //   'import',             // included in 'airbnb'
  //   'prettier',           // included in 'plugin:prettier/recommended'
  // ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_',
      },
    ],
    'no-restricted-syntax': 'off',
  },
};
