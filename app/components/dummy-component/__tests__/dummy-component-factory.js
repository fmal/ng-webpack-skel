'use strict';

describe('dummy-component-factory', function () {

    var DummyComponentFactory, DummyComponentFactoryInstance;

    beforeEach(angular.mock.module(require('../dummy-component-module').name));

    beforeEach(function () {
        angular.mock.inject(function (_dummyComponentFactory_) {
            DummyComponentFactory = _dummyComponentFactory_;
            DummyComponentFactoryInstance = new DummyComponentFactory();
        });
    });

    it('should not be undefined', function () {
        expect(DummyComponentFactoryInstance).not.toBe(undefined);
    });

    it('should have greeting included', function () {
        expect(DummyComponentFactoryInstance.greeting).not.toBe(undefined);
    });

    it('should be able to greet itself by returning greeting', function () {
        expect(DummyComponentFactoryInstance.greet()).toBe(DummyComponentFactoryInstance.greeting);
    });

    it('should be able to do basic math', function () {
        expect(DummyComponentFactoryInstance.doBasicMath()).toEqual(4);
    });
});