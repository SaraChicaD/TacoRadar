angular.module('tacosApp.tacos', ['ngRoute'])

.config(['$routeProvider', 
  function($routeProvider) {
  
  $routeProvider
  .when('/tacos', {
    templateUrl: 'template/tacos.html',
    controller: 'tacosController'
    
  })
    .when('/about', {
    templateUrl: 'template/about.html',
    controller: 'aboutController'
    
  });

}])

.controller('tacosController', ['$scope', '$http', '$log', 
  function($scope, $http, $log) {


    // $http.jsonp('https://api.yelp.com/v2/search?term=tacos&location=Austin')
    // .success(jsonYelpTacos = function(data) {

    // $scope.data = data;
    // $log.log(data);


}])

.controller('aboutController', ['$scope', '$http', '$log', 
  function($scope, $http, $log) {


}])
;