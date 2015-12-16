/**
 * app-index-state state
 */
require('./index-state.scss');

angular.module('app')
    .config(function ($stateProvider) {

        $stateProvider.state('index', {
            url: '/',
            parent: 'app',
            views: {
                "": {
                    template: require('./index-state.html'),
                    controller: 'IndexStateController'
                }
            }
        });
    })
    .controller('IndexStateController', function ($scope, apiSrv) {
        $scope.loadUsers  = function(){
            $scope.users = null;
            return apiSrv.get('users.json').then(function(users){
                $scope.users = users;
            })
        }

        $scope.loadUsers2  = function(){
            $scope.$promise = $scope.loadUsers();
        }
    });
