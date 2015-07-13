'use strict';

var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    atImport = require('postcss-import'),
    bemLinter = require('postcss-bem-linter'),
    autoprefixer = require('autoprefixer-core'),
    loaders = require('./webpack.loaders.config');

var WEBPACK_CONTEXT = process.env.WEBPACK_CONTEXT || 'dev',
    IS_PRODUCTION = (WEBPACK_CONTEXT === 'prod'),
    ROOT_PATH = path.resolve(__dirname),
    GLOBALS = {
        'process.env.NODE_ENV': JSON.stringify(IS_PRODUCTION ? 'production' : 'development')
    };

module.exports = {
    debug: !IS_PRODUCTION,
    cache: !IS_PRODUCTION,
    devtool: !IS_PRODUCTION && 'inline-source-map',
    entry: {
        app: path.join(ROOT_PATH, 'app/app.js')
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        filename: IS_PRODUCTION ? '[name].[hash].bundle.js' : '[name].bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jshint-loader'
        }],
        loaders: loaders.concat({
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', [
                'css-loader',
                'postcss-loader'
            ].join('!'))
        }),
        noParse: [
            /\.min\.js/,
            /[\/\\]angular\.js$/,
            /[\/\\]angular-route\.js$/,
            /[\/\\]angular-resource\.js$/
        ]
    },
    resolve: {
        modulesDirectories: [
            'node_modules',
            'app'
        ],
        extensions: ['', '.js', '.json'],
        alias: {}
    },
    externals: {
      //jquery: 'jQuery'
    },
    postcss: [
        atImport({
            path: [
                'node_modules',
                'app'
            ]
        }),
        autoprefixer(),
        bemLinter()
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS)
    ].concat(IS_PRODUCTION ? [
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('[name].[hash].bundle.css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(ROOT_PATH, 'app/index.tpl.html'),
            isProduction: true
        })
    ] : [
        new ExtractTextPlugin('[name].bundle.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(ROOT_PATH, 'app/index.tpl.html')
        })
    ]),
    jshint: {
        failOnHint: false
    }
};
