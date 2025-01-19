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


/*
module.exports = {
  languageOptions: {
    globals: {
      node: true,
      es2021: true,
    }
  },
  extends: 'eslint:recommended', // Use recommended rules
  parserOptions: {
    ecmaVersion: 12, // Set the ECMAScript version
    sourceType: 'module', // Use modules
  },
  rules: {
    semi: [ 'warn', 'always' ],
    quotes: [ 'error', 'single' ],
    indent: [ 'warn', 2, { SwitchCase: 1 }],
    'no-trailing-spaces': 'warn',
    'comma-spacing': [ 'warn', { 'before': false, 'after': true }],
  },
};*/
