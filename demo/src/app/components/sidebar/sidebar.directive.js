(function () {
  'use strict';
  angular.module('demo')
    .directive('shmckSidebar', shmckSidebar);

  function shmckSidebar() {

    var sidebarLinks = {
      TYPES: [{
        state: 'input',
        text: 'Inputs'
      }, {
        state: 'checkbox',
        text: 'Checkboxes'
      }, {
        state: 'switch',
        text: 'Switches'
      }, {
        state: 'radio',
        text: 'Radio Buttons'
      }, {
        state: 'select',
        text: 'Selectors'
      }, {
        state: 'dropdown',
        text: 'Dropdowns'
      }, {
        state: 'datePicker',
        text: 'Date Picker'
      }],
      WRAPPERS: [{
        state: 'error',
        text: 'Errors'
      }, {
        state: 'theme',
        text: 'Themes'
      }, {
        state: 'flex',
        text: 'FlexBox'
      }],
      FEATURES: [{
        state: 'modelOptions',
        text: 'Model Options'
      }, {
        state: 'validators',
        text: 'Validators'
      }, {
        state: 'expression',
        text: 'Expression Properties'
      }, {
        state: 'ngModelAttrs',
        text: 'ngModel Atributes'
      }, {
        state: 'ctrlLink',
        text: 'Controller / Link'
      }, {
        state: 'watcher',
        text: 'Watchers'
      }]
    };

    return {
      scope: {
        items: '@'
      },
      templateUrl: 'app/components/sidebar/sidebar.tmpl.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: function (SidebarService) {
        var vm = this;
        vm.sidebarLinks = sidebarLinks;
        vm.sidebar = SidebarService;
      }
    };
  }

}());
