module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-empty-function': 'off',

    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['PascalCase', 'UPPER_CASE'],
        types: ['boolean'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'property',
        modifiers: ['readonly'],
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
      },
      {
        selector: 'classProperty',
        format: ['UPPER_CASE', 'snake_case'],
        modifiers: ['requiresQuotes'],
        filter: {
          regex:
            '_(URL|TYPE|HOST|PORT|PASSWORD|NAME|USERNAME|SYNCHRONIZE|MAX_CONNECTIONS|SSL_ENABLED|REJECT_UNAUTHORIZED|CA|KEY|CERT)$',
          match: true,
        },
      },
    ],
  },
};
