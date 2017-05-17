angular.module('myApp.view1').factory('StockItemListModel', function () {
//if we want to get the StockList from a backend api then we can use the below snippet instead of the above one
    //.factory('StockItemListModel', ['$http',function($http) {
    // $http.get('theServer/stockItemList/').success(function(stockData){
    //   StockItemListModel.stockItemList=stockData;
    // });
    //}]);
    var StockItemListModel = {};
    //Using dummy data
    StockItemListModel.stockItemList = [
      { name: 'Milk', description: 'Whole fat', price: 1.20, availableDate: '01/01/2017', taxable: true, quantity: 23 },
      { name: 'Bread', description: 'Brown', price: 0.99, availableDate: '01/01/2017', taxable: true, quantity: 12 },
      { name: 'Cheese', description: 'Cheddar', price: 1.50, availableDate: '01/01/2017', taxable: true, quantity: 23 },
      { name: 'Tomatoes', description: 'Cherry', price: 2.20, availableDate: '01/01/2017', taxable: true, quantity: 4 },
      { name: 'Banana', description: 'Fairtrade', price: 1.05, availableDate: '01/01/2017', taxable: false, quantity: 30 }
    ];
    StockItemListModel.addNewItem = function (newItem) {
      StockItemListModel.stockItemList.push(newItem);
    }
    return StockItemListModel;

});