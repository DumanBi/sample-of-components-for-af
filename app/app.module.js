(function() {
  'use strict';

  angular
    .module('soc-faf-app', [
      'ngRoute',
      'ngMaterial',
      'ngAnimate',
      'angularUtils.directives.dirPagination',
      'firebase',
      'soc-faf-bmCreate',
      'soc-faf-bmList',
      'soc-faf-bmForm',
      'soc-faf-bmTags'
    ]);

})();
