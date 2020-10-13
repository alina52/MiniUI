const path = require("path");
const srcRoot = path.resolve(__dirname, "../components");

module.exports = {
  mode: "development",
  entry: {
    path: path.resolve(__dirname, "../example/src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../example/src"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../example/src"),
    compress: true,
    port: 3001, // set port to 3001
    open: true // auto open browser
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "cache-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "cache-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "url-loader?limit=8192",
        include: srcRoot
      }
    ]
  }
};
