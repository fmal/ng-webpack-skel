'use strict';

module.exports = function () {
    function dummyComponentFactory() {
        /* jshint validthis: true */
        this.greeting = 'Hi, I am a dummy component factory!';
        this.greet = function () {
            return this.greeting;
        }.bind(this);
        this.doBasicMath = function () {
            return 2 + 2;
        };
    }

    return dummyComponentFactory;
};