const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    target: "node",
    entry: ["./src"],
    output: {
      path: `${__dirname}/bin`,
      publicPath: "/",
      filename: "index.server.js",
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/, /lib/],
          use: ["babel-loader"]
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"]
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: "development"
      }),
      new CopyWebpackPlugin([ { from: "src/index.html", to: "public/" }, { from: "src/public", to: "public/" } ])
    ]
  };
};
