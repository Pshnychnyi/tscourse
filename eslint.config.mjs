import globals from 'globals'
// import pluginJs from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
// import tseslint from 'typescript-eslint'


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  // pluginJs.configs.all,
  // ...tseslint.configs.all,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'computed-property-spacing': 'error',
      'eol-last': ['error', 'always'],
      'eqeqeq': ['error', 'always'],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'id-length': ['off'],
      'no-console': 'off',
      'no-constant-condition': 'error',
      'no-empty': 'error',
      'no-irregular-whitespace': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-trailing-spaces': 'error',
      'no-undefined': 0,
      'no-unneeded-ternary': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'space-before-blocks': 'error',

    },
  },
]
