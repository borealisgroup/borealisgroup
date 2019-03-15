module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    webextensions: false,
  },
  plugins: ['react', 'react-hooks', 'promise', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: { version: 'latest' },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'linebreak-style': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': [1, { args: 'none' }],
    'prefer-promise-reject-errors': 'off',
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // to consider:
    'react/no-array-index-key': 'off',
    'react/no-string-refs': 'off',

    // to remove:
    'react/forbid-prop-types': 'off',
    'react/no-did-update-set-state': 'off',
    'react/button-has-type': ['error', { reset: true }],
    'react/prefer-stateless-function': 'off',
  },
};
