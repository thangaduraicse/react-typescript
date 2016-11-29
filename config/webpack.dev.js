const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const helpers = require("./helpers");

const METADATA = webpackMerge(commonConfig.metadata, {
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 3000,
  ENV: process.env.ENV = process.env.NODE_ENV = "development"
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
    `webpack-dev-server/client?http://${METADATA.host}:${METADATA.port}`,
    `webpack/hot/only-dev-server`,
    `./src/index.tsx`
  ],
  devtool: "inline-source-map",
  output: {
    path: helpers.root("www"),
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: helpers.root("www"),
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: METADATA.port,
    host: METADATA.host,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});
