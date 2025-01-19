module.exports = {
  languageOptions : {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    semi: [ 'warn', 'always' ],
    quotes: [ 'error', 'single' ],
    indent: [ 'warn', 2, { SwitchCase: 1 }],
    'no-trailing-spaces': 'warn',
    'comma-spacing': [ 'warn', { 'before': false, 'after': true }],
  },
};
