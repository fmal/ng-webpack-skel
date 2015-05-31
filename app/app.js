'use strict';

require('./app.css');

var angular = require('angular');

var app = module.exports = angular.module('app', [
    // angular modules
    require('angular-route'),
    require('angular-resource'),

    // components
    require('./components/dummy-component/dummy-component-module').name,

    // states
    require('./states/dummy-state/dummy-state-module').name
]);

global.window.app = app;
