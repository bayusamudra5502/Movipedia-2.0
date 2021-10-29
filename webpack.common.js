const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: {
            // esModule: false,
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            // esModule: false,
            outputPath: "assets/img",
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@style": path.resolve(__dirname, "src/scss"),
      "@": path.resolve(__dirname, "src/js"),
    },
    extensions: [".ts", ".js"],
  },
};
