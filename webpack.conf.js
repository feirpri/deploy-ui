var path = require('path')
var projectRoot = path.join(__dirname)
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: path.join(__dirname, '/dist/assets'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
    ],
    extensions: ['', '.js', '.vue'],
    modulesDirectories: ["node_modules", "bower_components"],
    alias: {
      'src': path.resolve('./packages'),
      'vue$': 'vue/dist/vue.js'
    }
  },
  externals: fs.readdirSync("node_modules"),
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  vue: {
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
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
    new webpack.optimize.OccurenceOrderPlugin(),
  ]
}
