'use strict';

var context = require.context('./app', true, /__tests__\/\S+\.js$/);

context.keys().forEach(context);

module.exports = context;