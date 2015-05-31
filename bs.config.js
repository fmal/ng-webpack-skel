'use strict';

var pkg = require('./package.json');

module.exports = {
    logPrefix: pkg.name,
    files: ['dist/*'],
    server: {
        baseDir: 'dist'
    },
  //proxy: 'local.dev',
    notify: false,
    logConnections: true,
    scrollThrottle: 100,
    plugins: [
    {
        module: 'browser-sync-spa',
        options: {
            selector: '[ng-app]'
        }
    }]
};