const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]',
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
              plugins: ['istanbul'],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};

module.exports = merge(baseConfig, config);
