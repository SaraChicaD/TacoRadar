angular.module('tacosApp', [
  'ngRoute',
  'tacosApp.tacos'
]).

config(['$routeProvider', 
	function($routeProvider) {

  $routeProvider.otherwise({redirectTo: '/tacos'});
  
}]);
