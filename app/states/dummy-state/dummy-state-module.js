'use strict';

// pull controllers
var DummyStateController = require('./dummy-state-controller');

// define module
module.exports = angular.module('dummyStateModule', [])
    .controller('DummyStateController', ['$scope', DummyStateController]);
