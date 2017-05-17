'use strict';
// var stockItemList = require('../model/stockItemList.js');

angular.module('myApp.view1', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }])

  .factory('StockItemListModel', function () {
    //if we want to get the StockList from a backend api then we can use the below snippet instead of the above one
    // .factory('StockItemListModel', ['$http',function($http) {
    // $http.get('theServer/stockItemList/').success(function(stockData){
    //   StockItemListModel.stockItemList=stockData;
    // });
    // }]);
    var StockItemListModel = {};
    //Using dummy data instead of above http function
    StockItemListModel.stockItemList = [
      { name: 'Milk', description: 'Whole fat', price: 1.20, availableDate: '01/01/2017', taxable: true, quantity: 23 },
      { name: 'Bread', description: 'Brown', price: 0.99, availableDate: '01/01/2017', taxable: true, quantity: 12 },
      { name: 'Cheese', description: 'Cheddar', price: 1.50, availableDate: '01/01/2017', taxable: true, quantity: 23 }
    ];

    StockItemListModel.addNewItem = function (newItem) {
      //adding to the dummy data
      StockItemListModel.stockItemList.push(newItem);
      //if writing it to a backend api with http the code below can be used
      //var dataObj={name:newItem.name,description: newItem.description, price:newItem.price, availableDate:newItem.availableDate, taxable:newItem.taxable, quantity: newItem.quantity};
      // var res = $http.post('/addNewItem.json', dataObj);
    }
    return StockItemListModel;
  })
  .controller('View1Ctrl', ['$scope', 'StockItemListModel', function ($scope, StockItemListModel) {

    $scope.stockItemList = StockItemListModel.stockItemList;

    var resetNewItemFields = function () {
      $scope.newItemName = "";
      $scope.newItemDescription = "";
      $scope.newItemPrice = "";
      $scope.newItemAvailableDate = "";
      $scope.newItemTaxable = "";
      $scope.newItemQuantity = "";
    };

    $scope.addNewItem = function () {
      var newListItem = {
        name: '',
        description: '',
        price: 0,
        availableDate: '',
        taxable: true,
        quantity: 0
      }
      newListItem.name = $scope.newItemName;
      newListItem.description = $scope.newItemDescription;
      newListItem.price = $scope.newItemPrice;
      newListItem.availableDate = $scope.newItemAvailableDate;
      newListItem.taxable = $scope.newItemTaxable;
      newListItem.quantity = $scope.newItemQuantity;

      StockItemListModel.addNewItem(newListItem);
      //clear selections
      resetNewItemFields();
    }

  }]);