module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        alias: {
          '@': ['./src'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
