'use strict';

module.exports = [
  /*{
        test: /\.js$/,
        loaders: [
            'babel-loader'
        ],
        exclude: /node_modules/
    },*/
    { test: /\.html$/, loader: 'raw-loader' },
    { test: /\.json$/, loader: 'json-loader' },
    { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=2000&name=images/[name].[ext]' }
];