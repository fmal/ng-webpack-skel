'use strict';

describe('dummy-state-controller', function () {

    var $rootScope, $scope, $controller, getDummyStateControllerInstance, DummyStateController;

    beforeEach(angular.mock.module(require('../dummy-state-module').name));

    beforeEach(function () {
        angular.mock.inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $controller = _$controller_;

            $scope = $rootScope.$new();
            getDummyStateControllerInstance = function () {
                return $controller('DummyStateController', {
                    '$scope': $scope
                });
            };
        });
    });

    beforeEach(function () {
        DummyStateController = getDummyStateControllerInstance();
    });

    it('should have predefined value and this value should equal to "Hello world!"', function () {
        expect($scope.predefinedValue).not.toBe(undefined);
        expect($scope.predefinedValue).toEqual('Hello world!');
    });
});