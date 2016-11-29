const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const commonConfig = require("./webpack.common.js");
const helpers = require("./helpers");

const METADATA = webpackMerge(commonConfig.metadata, {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 8080,
  ENV: process.env.ENV = process.env.NODE_ENV = "production"
});

const GLOBALS = {
  "ENV": JSON.stringify(METADATA.ENV),
  "process.env": {
    "ENV": JSON.stringify(METADATA.ENV),
    "NODE_ENV": JSON.stringify(METADATA.ENV)
  }
};

module.exports = webpackMerge(commonConfig, {
  entry: [
    `react-hot-loader/patch`,
    `./src/index.tsx`
  ],
  devtool: "source-map",
  output: {
    path: helpers.root("www"),
    publicPath: "/",
    filename: "[chunkhash].js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: ["css-loader", "postcss-loader"]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8 : true, keep_fnames: true },
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      },
      comments: false
    }),
    new webpack.LoaderOptionsPlugin({
      debug: false
    }),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin("[contenthash].css"),
    new OptimizeCssAssetsPlugin()
  ],
  node: {
    process: false
  }
});
