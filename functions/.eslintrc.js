module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  root: true,
  plugins: ['promise'],
  extends: ['eslint:recommended', 'google'],
  rules: {
    'no-restricted-globals': ['error', 'name', 'length'],
    'prefer-arrow-callback': 'error',
    quotes: ['error', 'double', { allowTemplateLiterals: true }],
    'no-console': 'off',
    // Removed rule "disallow multiple spaces in regular expressions" from recommended eslint rules
    'no-regex-spaces': 'off',
    // Removed rule "disallow the use of debugger" from recommended eslint rules
    'no-debugger': 'off',
    // Removed rule "disallow unused variables" from recommended eslint rules
    'no-unused-vars': 'off',
    // Removed rule "disallow mixed spaces and tabs for indentation" from recommended eslint rules
    'no-mixed-spaces-and-tabs': 'off',
    // Removed rule "disallow the use of undeclared variables unless mentioned in /*global */ comments" from recommended eslint rules
    'no-undef': 'off',
    // Warn against template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 1,
    'consistent-return': 0,
    // Warn if no return statements in callbacks of array methods
    'array-callback-return': 1,
    // Require the use of === and !==
    eqeqeq: 2,
    // Disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // Disallow the use of arguments.caller or arguments.callee
    'no-caller': 2,
    // Disallow null comparisons without type-checking operators
    'no-eq-null': 2,
    // Disallow the use of eval()
    'no-eval': 2,
    // Warn against extending native types
    'no-extend-native': 1,
    // Warn against unnecessary calls to .bind()
    'no-extra-bind': 1,
    // Warn against unnecessary labels
    'no-extra-label': 1,

    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // Warn against shorthand type conversions
    'no-implicit-coercion': 1,
    // Warn against function declarations and expressions inside loop statements
    'no-loop-func': 1,
    // Disallow new operators with the Function object
    'no-new-func': 2,
    // Warn against new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 1,
    // Disallow throwing literals as exceptions
    'no-throw-literal': 2,
    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 2,
  },
  overrides: [
    {
      files: ['**/*.spec.*'],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
