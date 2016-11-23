const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const helpers = require("./helpers");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "bootstrap-css": helpers.root("node_modules/bootstrap/dist/css/bootstrap.css")
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|www)/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.json$/,
        exclude: /(www)/,
        loader: "json-loader"
      },
      {
        test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(www)/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)$/,
        exclude: /(www)/,
        loader: "url-loader?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(www)/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(www)/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.gif/,
        exclude: /(www)/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg/,
        exclude: /(www)/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png/,
        exclude: /(www)/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      }
    ]
  },
  plugins: [
    // Do type checking in seperate process
    new ForkCheckerPlugin(),
    new HtmlWebpackPlugin({
      title: "React Redux App Using Typescript and Webpack",
      template: "src/index.html",
      chunksSortMode: "dependency"
    }),
    new CopyWebpackPlugin([{
      from: "src/img",
      to: "img"
    }]),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer({
            browsers: ["last 2 versions"]
          })
        ]
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    global: true,
    crypto: "empty",
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
