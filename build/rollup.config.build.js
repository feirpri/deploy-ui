const uglify = require('rollup-plugin-uglify');
const path = require('path');
const baseConf = require('./rollup.config.base.js');
const composeFile = require('./composeFile.js');

// 合并文件
composeFile();

// 修改默认配置
baseConf.plugins.push(uglify());
module.exports = Object.assign(baseConf, {
    entry: path.resolve('./src/index.js'),
    dest: path.resolve('./dist/index.js'),
    format: 'umd',
    moduleName: 'deployUi',
    external: Object.keys(require('../package.json').dependencies),
});
