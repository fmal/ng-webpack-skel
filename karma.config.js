'use strict';

var webpack = require('webpack'),
    webpackConfig = Object.create(require('./webpack.config')),
    webpackLoaders = require('./webpack.loaders.config');

module.exports = makeConfig();
module.exports.makeConfig = makeConfig;

function makeConfig (context) {
    context = context || 'dev';

    var IS_PRODUCTION = (context === 'prod');

    return function (config) {
        config.set({

            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: './',


            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine'],


            // list of files / patterns to load in the browser
            files: [
                'node_modules/angular/angular.js',
                'node_modules/angular-resource/angular-resource.js',
                'node_modules/angular-route/angular-route.js',
                'node_modules/angular-mocks/angular-mocks.js',
                'tests.webpack.js'
            ],

            // list of files to exclude
            exclude: [],


            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {
                'tests.webpack.js': ['webpack', 'sourcemap']
            },


            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['progress', 'html'],

            webpack: {
                watch: !IS_PRODUCTION,
                resolve: webpackConfig.resolve,
                devtool: 'inline-source-map',
                module: {
                    preLoaders: webpackConfig.module.preLoaders,
                    loaders: webpackLoaders.concat({
                        test: /\.css$/,
                        loader: 'style-loader!css-loader'
                    }),
                    noParse: webpackConfig.module.noParse
                },
                plugins: [
                    new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('test')
                    })
                ],
                jshint: webpackConfig.jshint
            },

            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)
            colors: true,


            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: !IS_PRODUCTION,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: [
                //'PhantomJS',
                'Chrome'
            ],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: IS_PRODUCTION,

            browserNoActivityTimeout: 180000,

            plugins: [
                require('karma-webpack'),
                'karma-jasmine',
                'karma-chrome-launcher',
                'karma-phantomjs-launcher',
                'karma-jasmine-html-reporter',
                'karma-sourcemap-loader'
            ],
        });
    };
}