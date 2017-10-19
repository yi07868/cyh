(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'陈毅鸿',
      ab:'',
      name1:'陈毅鸿',
      phone:'13055306361',
      phone1:'13055306361',
      createTime:'2017-9-30 15:30:00',
      email:'1137393024@qq.com',
      hylx:'cyh'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
