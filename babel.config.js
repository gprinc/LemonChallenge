module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@components': './src/app/components',
          '@constants': './src/constants',
          '@interfaces': './src/interfaces',
          '@redux': './src/redux',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
