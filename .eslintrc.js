// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    'expo',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 'off',
    'prefer-promise-reject-errors': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.mdx', '.jsx']
      }
    ],
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    'no-return-assign': 'off',
    'react/display-name': 'off',
    'global-require': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'no-constant-condition': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'no-multi-spaces': 'warn',
    'eslint-disable-next-line': 'off',
    'import/no-unresolved': 'off',
    'no-empty': [
      'off',
      {
        allowEmptyCatch: true,
        allowEmptyFunctions: true,
        allowEmptyReturn: true
      }
    ],
    'no-extra-boolean-cast': 'off',
    // eslint bugged rules
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // typescript constraints
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
        ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/public/**/workbox-*.{js,js.map}']
      }
    ]
  }
}
