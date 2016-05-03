var app = angular.module("app", ["ui.router", "firebase"]);

app.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider.state('drinks', {
    url: '/',
    templateUrl: 'templates/drinks.html',
    controller: 'drinksController'
  });

  $stateProvider.state('add', {
    url: '/add-drinks',
    templateUrl: 'templates/add.html',
    controller: 'addController'
  });
}]);

  

app.controller('drinksController', function($scope) {
  $scope.message = 'Drinks here';
});

app.controller('addController', function($scope) {
  $scope.message = 'Add a drink here';
});