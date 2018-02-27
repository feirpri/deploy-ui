let path = require('path');
let resolve = require('rollup-plugin-node-resolve');
let vue = require('rollup-plugin-vue');
let uglify = require('rollup-plugin-uglify');
let babel = require('rollup-plugin-babel');
let replace = require('rollup-plugin-replace');
let commonjs = require('rollup-plugin-commonjs');
let alias = require('rollup-plugin-alias');

module.exports = {
    plugins: [
        alias({
            resolve: ['/index.js'],
            'src': path.resolve('./packages'),
            'vue': path.resolve('./node_modules/vue/dist/vue.esm.js')
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
    ],
    sourceMap: true
}
