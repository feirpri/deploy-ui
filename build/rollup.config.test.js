const istanbul = require('rollup-plugin-istanbul');
const baseConf = require('./rollup.config.base.js');

baseConf.plugins.splice(3, 0, istanbul({
    exclude: ['test/**/*', 'node_modules/**/*']
}));
module.exports = baseConf;
