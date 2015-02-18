(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckJsonFields', shmckJsonFields);

  function shmckJsonFields() {
    return {
      templateUrl: 'app/components/jsonFields.tmpl.html',
      scope: {
        fields: '='
      }
    };
  }

}());