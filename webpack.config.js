const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = ["react", "react-dom", "react-bootstrap", "moment"];

const config = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      { use: "babel-loader", test: /\.(js|jsx)$/, exclude: /node_modules/ },
      { use: ["style-loader", "css-loader"], test: /\.css$/ }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true
  }
};

module.exports = config;
