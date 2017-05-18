'use strict';

describe('myApp.view1 module', function () {

  beforeEach(module('myApp.view1'));
  
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));
  
  describe('$scope.addNewItem', function () {

    it('should add a new item to the stock list', inject(function ($controller) {
      var $scope={};
      var view1Ctrl = $controller('View1Ctrl',{$scope: $scope});
      $scope.newItemName = "TestName";
      $scope.newItemDescription = "TestDescription";
      $scope.newItemPrice = "TestPrice";
      $scope.newItemAvailableDate = "TestAvailableDate";
      $scope.newItemTaxable = "TestTaxable";
      $scope.newItemQuantity = "TestQuantity";
      
      $scope.addNewItem();
      expect($scope.stockItemList.length).toBeGreaterThan(3);
    }));

  });


});