module.exports = {
  env: {
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': ['error', { props: false }],
  },
  plugins: ['prettier', 'jest'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
