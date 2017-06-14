var path = require('path')
var projectRoot = path.join(__dirname)
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var fs = require('fs')

module.exports = {
  entry: {
    index: ['./src/index.js', './theme/index.less'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: path.join(__dirname, '/dist/assets'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'src': path.resolve('./packages'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  externals: fs.readdirSync("node_modules"),
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('css-loader!less-loader')
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader'
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"production"'
    }),
    new ExtractTextPlugin('css/index.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}
