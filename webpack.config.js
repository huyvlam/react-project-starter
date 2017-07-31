const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'lib')

module.exports = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Tile'
  },
  /* To exclude these modules in output, uncomment "externals: {}" */
  // externals: {
  //   react: 'react',
  //   'react-dom': 'react-dom',
  //   'prop-types': 'prop-types'
  // },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: APP_DIR,
        options: {
          presets: [
            'es2015', 'react'
          ]
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: APP_DIR,
        options: {
          presets: [
            'es2015', 'react'
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true
      },
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new HtmlWebpackPlugin({
      template: APP_DIR  + '/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
