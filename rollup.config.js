let path = require('path');
let resolve = require('rollup-plugin-node-resolve');
let vue = require('rollup-plugin-vue');
let uglify = require('rollup-plugin-uglify');
let alias = require('rollup-plugin-alias');
let babel = require('rollup-plugin-babel');
let replace = require('rollup-plugin-replace');
let commonjs = require('rollup-plugin-commonjs');
let localResolve = require('./rollup.plugin.index.js');

module.exports = {
    entry: path.resolve('src/index.js'),
    dest: path.resolve('dist/index2.js'),
    format: 'umd',
    moduleName: 'deployUi',
    plugins: [
    	localResolve({
    		suffix: [ '.js', '.vue', '.json', '/index.js'],
    		alias: {
    			'src': path.resolve('./packages'),
      			'vue$': 'vue/dist/vue.js'
    		}
    	}),
    	resolve({
    		extensions: [ '.js', '.vue', '.json' ],
    	}),
        vue(),
        commonjs(),
    	babel({
      		exclude: 'node_modules/**'
    	}),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser')
        }),
    	uglify()
    ],
    external: Object.keys(require('./package.json').dependencies),
    sourceMap: true
}
