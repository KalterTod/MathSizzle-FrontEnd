(function() {
  var app = angular.module('MathSizzle', ['ngRoute']);

  // configure our routes
  app.config(function($routeProvider) {
    $routeProvider
      // route for the home page
      .when('/', {
          templateUrl: 'home.html',
          controller: 'homeCtrl',
          activeTab: 'home'
      })

      // route for the about page
      .when('/about', {
          templateUrl: 'about.html',
          controller: 'aboutCtrl',
          activeTab: 'about'
      })

      // route for the contact page
      .when('/lessons', {
          templateUrl: 'lessons.html',
          controller: 'lessonsCtrl',
          activeTab: 'lessons'
      })

      // route for the contact page
      .when('/problems', {
          templateUrl: 'problems.html',
          controller: 'problemsCtrl',
          activeTab: 'problems'
      });
  });

  app.controller('navCtrl', function($scope, $route) {
    $scope.route = $route;
  })

  app.controller('homeCtrl', function($scope) {
    $scope.name = 'Home!';
  });

  app.controller('aboutCtrl', function($scope) {
    $scope.name = 'About!';
  });

  app.controller('lessonsCtrl', function($scope) {
    $scope.name = 'Lessons!';
  });

  app.controller('problemsCtrl', function($scope) {
    $scope.name = 'Problems!';
  });

})();
