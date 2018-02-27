var rollupConfig = require('../../build/rollup.config.test.js');
var useChrome = process.argv.indexOf('-n') > -1;

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    // basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      "index.js",
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "index.js": ['rollup'],
    },

    rollupPreprocessor: rollupConfig,

    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: !useChrome,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
