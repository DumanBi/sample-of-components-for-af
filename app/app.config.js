(function() {
  'use strict';

  angular
    .module('soc-faf-app')
    .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'app/pages/main.html'
        })
        .when('/filter/:tag', {
          templateUrl: 'app/pages/main.html'
        })
        .when('/edit/:id', {
          templateUrl: 'app/pages/edit.html',
          controller: 'EditCtrl',
          controllerAs: 'bm'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
})();
