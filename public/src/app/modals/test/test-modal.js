'use strict';

require('./test-modal.scss');

angular.module('app')

    .config(function($modalsProvider){
        $modalsProvider.register('test', function(params, config){
            return {
                template: require('./test-modal.html'),
                controller: 'TestModalController',
                windowClass: 'test-modal',
                resolve: {
                    // you can add some extra resolves here
                }
            };
        });
    })

    .controller('TestModalController', function ($scope, $uibModalInstance) {
        $scope.ok = function () {
            $uibModalInstance.close('reason');
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    });