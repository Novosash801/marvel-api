module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [

            // My rules

            'warn',
                { allowConstantExport: true },
            ],
            'indent': [
                'warn',
                4
            ],
            'linebreak-style': [
                'error',
                'windows'
            ],
            'quotes': [
                'error',
                'single', {
                    'allowTemplateLiterals': true
                }
            ],
            'semi': [
                'warn',
                'always'
            ],
            'react/prop-types': [ 
                'off'
            ],
            'no-unused-vars': [
                'warn'
            ],
    },
}
