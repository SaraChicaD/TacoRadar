angular.module('tacoApp.about', ['ngRoute'])

.config(['$routeProvider', 
  function($routeProvider) {
  
  $routeProvider.when('/about', {
    templateUrl: 'template/about.html',
    controller: 'AboutController'
    
  });
}])

.controller('AboutController', ['$scope', '$http', '$log', 
  function($scope, $http, $log) {


  }
]);