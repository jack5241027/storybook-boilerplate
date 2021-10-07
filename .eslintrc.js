module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
        ],
      },
    ],

    'no-console': 'warn',

    'no-useless-escape': 'off',

    // Turn semi off
    semi: ['error', 'never'],

    // Add spaces inside curly braces.
    'object-curly-spacing': ['error', 'always'],

    // Disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'error',
      { vars: 'local', args: 'after-used', ignoreRestSiblings: true },
    ],

    // Prefer destructuring from arrays and objects
    'prefer-destructuring': [
      'off',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Enforce require() on the top-level module scope
    'global-require': 'off',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', { allowAfterThis: false }],

    // Don't require return statements to either always or never specify values
    'consistent-return': 'off',

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
}
