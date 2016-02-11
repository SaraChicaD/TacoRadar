angular.module('flickrApp.feed', ['ngRoute'])

.config(['$routeProvider', 
  function($routeProvider) {
  
  $routeProvider.when('/feed', {
    templateUrl: 'template/feed.html',
    controller: 'FeedController'
    
  });
}])

.controller('FeedController', ['$scope', '$http', '$log', 
  function($scope, $http, $log) {

  $scope.data = {

    feed: false

  };

    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?id=24662369@N07&format=json&tags=hubble')
    .success(jsonFlickrFeed = function(data) {

    $scope.data = data;
    $scope.flickrFeed = data.items;
    $log.log(data);

  });
}]);