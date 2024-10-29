const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      index$: path.resolve(__dirname, '/src/index.js'),
      Model: path.resolve(__dirname, '/src/model'),
      Body: path.resolve(__dirname, '/src/components/body'),
      Shared: path.resolve(__dirname, '/src/components/body/shared'),
      AssetsShared: path.resolve(__dirname, '/src/components/body/assets-shared'),
    },
  },
};
