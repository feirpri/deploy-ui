let webpack = require('webpack');
let webpackConfig = require('./webpack.conf.js');
let composeFile = require('./composeFile.js');

// 合并文件
composeFile();

webpack(webpackConfig, (err, stats) => {
    if (err) {
        throw err;
    }
    
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
});
