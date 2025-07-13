const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: './',
      filename: 'bundle.js',
  },
  entry: './src/index.js',
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [
                          '@babel/preset-env',
                          '@babel/preset-react',
                      ],
                  },
              },
          },
      ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'public/index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'public/styles', to: 'styles' },
        ],
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
      static: {
          directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      open: true,
      hot: true,
  },
};
