const webpack = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const APP_DIR = path.resolve(__dirname, "src")
const BUILD_DIR = path.resolve(__dirname, "lib")

module.exports = {
  entry: APP_DIR + "/index.js",
  output: {
    path: BUILD_DIR,
    filename: "index.js",
    libraryTarget: "umd",
    library: "Tile"
  },
  /* To exclude these modules in output, uncomment "externals: {}" */
  // externals: {
  //   react: "react",
  //   "react-dom": "react-dom",
  //   "prop-types": "prop-types"
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: APP_DIR,
        options: {
          presets: [
            "env", "react"
          ]
        }
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: APP_DIR,
        options: {
          presets: [
            "env", "react"
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: APP_DIR + "/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        ie8: false,
        ecma: 5,
        warnings: false,
        compress: {
          ecma: 6
        },
        output: {
          beautify: false,
          comments: false
        }
      }
    })
  ]
}
