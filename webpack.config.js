const path = require("path"); //manipulate file paths
const HtmlWebpackPlugin = require("html-webpack-plugin"); //creats index.html file
module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: "./src/index.js", // react enty file
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, "public"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "index_bundle.js", // string
    publicPath: "/",
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader", //injects styles into DOM
          "css-loader", //Turns CSS into comonjs
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
