const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 1,
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.jsx', '.react.js'],
            alias: {
              '@components': path.resolve(__dirname, 'src/components'),
              '@containers': path.resolve(__dirname, 'src/containers'),
              '@styles': path.resolve(__dirname, 'src/styles'),
              '@utils': path.resolve(__dirname, 'src/utils'),
              '@services': path.resolve(__dirname, 'src/services'),
            },
          },
        },
      },
    },
  },
};
