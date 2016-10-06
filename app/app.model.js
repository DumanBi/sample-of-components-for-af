(function() {
  'use strict';

  angular
    .module('soc-faf-app')
    .factory('AppModel', AppModel);

  AppModel.$inject = ['$firebaseObject', 'FB'];

  function AppModel($firebaseObject, FB) {

    var ref = new Firebase(FB);
    var _self = $firebaseObject(ref);

    return {
      set: set,
      get: get,
      put: put,
      remove: remove,
      rewrite: rewrite
    };

    function set(key, value, who) {
      _self[key] = value;
      if(who !== 'RUN') _self.$save();
    }

    function get(key) {
      if (key && key in _self) return _self[key];
      if (key === 'all' || typeof key == 'undefined') return _self;
    }

    function put(key, value, who) {
      if (key && key in _self) {
        var array = _self[key];
        array.push(value);
        _self[key] = array;
      } else {
        var array = [];
        array.push(value);
        _self[key] = array;
      }
      _self.$save();
    }

    function remove(key, id) {
      angular.forEach(_self[key], function(value, index){
        if(value.id == id){
          _self[key].splice(index, 1);
        }
      });
      _self.$save();
    }

    function rewrite(values, who) {
      angular.extend(_self, values);
      _self.$save();
    }
  }

})();
