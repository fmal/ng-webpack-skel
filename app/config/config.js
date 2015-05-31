/**
 * Config store
 */

var config = {};

module.exports = (function () {
    'use strict';

    function setValue (name, value) {
        config[name] = value;
    }

    function getValue (name) {
        return config[name];
    }

    function deleteValue (name) {
        delete config[name];
    }

    return {
        'set': setValue,
        'get': getValue,
        'delete': deleteValue
    };
}());