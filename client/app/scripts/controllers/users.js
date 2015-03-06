'use strict';

angular.module('clientApp')
  .controller('UsersCtrl', ['$scope', 'User', function($scope, User) {
    $scope.users = User.query();
  }]); 