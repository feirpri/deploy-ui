var path = require('path')
var projectRoot = path.join(__dirname)
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs')

module.exports = {
  resolve: {
    // root: path.resolve(__dirname, 'src'),
    extensions: ['', '.js', '.vue'],
    modulesDirectories: ["node_modules", "bower_components"]
    // fallback: [path.join(__dirname, '/node_modules')]
  },
  // externals: fs.readdirSync("node_modules"),
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
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
      postcss: ExtractTextPlugin.extract('vue-style-loader', 'css-loader'),
      less: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!less-loader'),
      stylus: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!stylus-loader'),
      styl: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!stylus-loader'),
    },
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
    new ExtractTextPlugin('css/index.css')
  ]
}
