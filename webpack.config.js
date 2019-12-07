const { resolve } = require("path");
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/App.tsx",
  output: {
    path: resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 4000
  }
};
