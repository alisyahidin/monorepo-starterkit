/** @type {import('eslint').Linter.Config} */
module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@stylistic/disable-legacy',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
  ],
  'plugins': [
    '@stylistic',
  ],
  'rules': {
    // ts/js rules
    '@stylistic/indent': [
      'error', 
      2
    ],
    '@stylistic/semi': [
      'error', 
      'always'
    ],
    '@stylistic/space-before-blocks': [
      'error', 
      'always'
    ],
    '@stylistic/quotes': [
      'error',
      'single'
    ],
    '@stylistic/no-trailing-spaces': 'error',

    // jsx rules
    '@stylistic/jsx-quotes': [
      'error', 
      'prefer-single'
    ],
    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never',
        'beforeClosing': 'never'
      }
    ],

    ///tailwind rules
    'tailwindcss/classnames-order': [
      'error'
    ],
    'tailwindcss/no-custom-classname': 'off'
  },
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      },
    },
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: [
        'react',
        'react-hooks',
        'jsx-a11y'
      ],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    // TS
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          './tsconfig.base.json',
          './apps/*/tsconfig.json',
          './packages/*/tsconfig.json'
        ],
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/typescript',
      ],
      settings: {
        'import/resolver': {
          'typescript': {
            'project': [
              'packages/*/tsconfig.json',
              'apps/*/tsconfig.json'
            ]
          }
        },
      }
    },
  ],
};
