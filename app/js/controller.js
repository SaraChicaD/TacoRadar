angular.module('tacosApp.tacos', ['ngRoute'])

.config(['$routeProvider', 
  function($routeProvider) {
  
  $routeProvider.when('/tacos', {
    templateUrl: 'template/tacos.html',
    controller: 'tacosController'
    
  });
}])

.controller('tacosController', ['$scope', '$http', '$log', 
  function($scope, $http, $log) {

  $scope.data = {

    feed: false

  };

    // $http.jsonp('https://api.flickr.com/services/tacoss/photos_public.gne?id=24662369@N07&format=json&tags=hubble')
    // .success(jsonFlickrtacos = function(data) {

    // $scope.data = data;
    // $scope.flickrtacos = data.items;
    // $log.log(data);

  // });
}]);