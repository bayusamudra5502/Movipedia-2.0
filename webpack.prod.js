const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'assets/js/[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    // Memisahkan CSS dengan Javascript

    new MiniCSSExtractPlugin({
      filename: 'assets/css/[name].[fullhash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 100000,
    },
  },
});
