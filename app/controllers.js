angular.module('schoolPicker.controllers', [])

.controller('HomeCtrl', function ($scope, $http) {
    $scope.selectedTestAccount = null;
    $scope.testAccounts = [];

    $http({
            method: 'GET',
            url: '/Admin/GetTestAccounts',
            data: { applicationId: 3 }
        }).success(function (result) {
        $scope.testAccounts = result;
    });
});