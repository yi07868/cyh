(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'陈毅鸿',
        ab:'',
        name1:'陈毅',
        phone:'13055306361',
        phone1:'13055306361',
        createTime:'2017-9-30 15:30:00',
        email:'1137393024@qq.com',
        hylx:'cyh'
      });
    });
  }])
})();
