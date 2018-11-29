const webpack = require("webpack");

module.exports = () => {
  return {
    mode: "development",
    entry: ["./src/client"],
    output: {
      path: `${__dirname}/bin/public`,
      publicPath: "/",
      filename: "index.browser.js"
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
    }
  };
};
