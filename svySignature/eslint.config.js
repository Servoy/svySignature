const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'only-warn': require('eslint-plugin-only-warn'),
    },
    rules: {
      '@angular-eslint/component-class-suffix': 'off',
      '@angular-eslint/directive-selector': ['warn', { type: 'attribute', prefix: 'svysignature', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['warn', { type: 'element', prefix: 'svysignature', style: 'kebab-case' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'max-len': ['warn', { code: 200 }],
    },
  },
  {
    // Vendored third-party library, not authored here.
    files: ['**/lib/**/*.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
  },
);
