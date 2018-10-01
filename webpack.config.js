/**
 *
 * Webpack Config
 * Handles configuration of the Webpack CLI.
 *
 */
const webpack = require( "webpack" );
const sassLoaders = [
    "file-loader?name=../css/[name].css",
    "postcss-loader",
    "sass-loader?sourceMap"
];

/**
 *
 * dev
 * Webpack config for development.
 * Compiles JavaScript & Sass.
 *
 */
config = {
  module: {
    loaders: [
      // Sass
      {
          test: /\.scss$/,
          loader: sassLoaders.join( "!" )
      }
    ]
  },
  sassLoader: {
      includePaths: [
          path.resolve( __dirname, "source/public/stylesheets" )
      ]
  },
};

module.exports = [
    config
];