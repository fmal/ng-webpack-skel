'use strict';

// pull stylesheet
require('./dummy-component.css');

// pull factories
var dummyComponentFactory = require('./dummy-component-factory');

// define module
module.exports = angular.module('dummyComponentModule', [])
    .service('dummyComponentFactory', [dummyComponentFactory]);
