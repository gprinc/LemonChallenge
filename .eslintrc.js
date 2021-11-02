module.exports = {
  extends: ['@react-native-community'],
  rules: {
    complexity: 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-nested-ternary': 'off',
    'no-magic-numbers': 'off',
    'new-cap': 'off'
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        paths: ['src'],
        settings: {
          'import/resolver': {
            node: {
              paths: ['src'],
              extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json']
            }
          }
        }
      }
    }
  }
};
