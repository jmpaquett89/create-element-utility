const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    library: "create-element-utility",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "dist/build"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
