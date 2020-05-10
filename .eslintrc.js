module.exports = {
  extends: '@alexgodard/eslint-config-alexgodard',
  rules: {},
  // Stop ESLint from looking for a configuration file in parent folders
  root: true,
  ignorePatterns: ['dist', 'node_modules'],
};
