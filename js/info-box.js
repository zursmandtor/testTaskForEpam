
'use strict';

angular.module('infoBox', ['ngAnimate', 'ngTouch'])
    .controller('infoBoxCtrl', function ($scope, $http) {

        $http.get('js/info_box.json').success(function(data) {
            $scope.products = data;
        });

        // initial product index
        $scope._Index = 0;

        // if a current product is the same as requested image
        $scope.isActive = function (index) {
            return $scope._Index === index;
        };

        // show prev product
        $scope.showPrev = function () {
            $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.products.length - 1;
        };

        // show next product
        $scope.showNext = function () {
            $scope._Index = ($scope._Index < $scope.products.length - 1) ? ++$scope._Index : 0;
        };

        // show a certain product
        $scope.showProduct = function (index) {
            $scope._Index = index;
        };
    });



