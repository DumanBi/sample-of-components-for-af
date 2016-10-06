(function() {
  'use strict';

  angular
    .module('soc-faf-app')
    .run(run);

    run.$inject = ['AppModel', '$firebaseObject', 'FB'];

    function run(AppModel, $firebaseObject, FB){
      var ref = new Firebase(FB);
      var _self = new $firebaseObject(ref);

      _self.$loaded().then(function(data){
        AppModel.set('list', data.list, 'RUN');
      });

    }
})();
