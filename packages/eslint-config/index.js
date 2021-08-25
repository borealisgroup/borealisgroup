module.exports = {
  extends: [
    'airbnb',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:mdx/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    jest: true,
    node: true,
    webextensions: false
  },
  plugins: [
    'babel',
    'chai-friendly',
    'cypress',
    'react',
    'react-hooks',
    'promise',
    'jest',
    'simple-import-sort',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    },
    react: { version: 'detect' }
  },
  rules: {
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true
      }
    ],

    'babel/no-unused-expressions': 'error',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',

    // https://github.com/benmosher/eslint-plugin-import/issues/1558
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never'
      }
    ],
    'import/no-cycle': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off', // Allow single Named-export
    'import/order': ['off', { 'newlines-between': 'always' }],
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',

    'global-require': 'off',

    'jest/expect-expect': 'off',
    'jest/no-export': 'off',
    'jest/no-standalone-expect': 'off',

    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    'linebreak-style': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],

    'mdx/no-unescaped-entities': 'off',
    'mdx/no-unused-expressions': 'off',

    'no-alert': 'off',
    'no-continue': 'off',
    'no-multi-assign': 'off',
    'no-await-in-loop': 'off',
    'no-empty': 'off',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'no-nested-ternary': 'off', // short
    'no-new': 'off', // exceptions
    'no-param-reassign': 'off',
    'no-plusplus': 'off', // short
    'no-prototype-builtins': 'off', // short
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ], // for..of OK (break)
    'no-return-assign': 'off', // short
    'no-underscore-dangle': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
    ],
    'no-unused-expressions': 'off',

    'prefer-promise-reject-errors': 'off',

    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'off',

    'react/button-has-type': [
      'error',
      {
        reset: true
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx', 'mdx'] }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error'
  },
  overrides: [
    {
      files: 'server/**/*.js',
      env: { node: true },
      rules: {
        'simple-import-sort/import': 'off',
        'simple-import-sort/export': 'off',
        'import/order': ['error', { 'newlines-between': 'never' }]
      }
    },
    {
      files: ['**/*.test.*', '**/*.spec.*'],
      env: {
        jest: true
      }
    },
    {
      files: '**/*.stories.tsx',
      rules: {
        // just for showing the code in addon-docs
        'react-hooks/rules-of-hooks': 'off'
      }
    },
    {
      files: '**/*.mdx',
      rules: {
        'prettier/prettier': 'off',
        'simple-import-sort/import': 'off',
        'simple-import-sort/export': 'off',
        'import/order': ['error', { 'newlines-between': 'never' }]
      }
    }
  ]
};
