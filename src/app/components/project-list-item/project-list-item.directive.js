(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .directive('projectListItem', projectListItem);

  /** @ngInject */
  function projectListItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/project-list-item/project-list-item.html',
      scope: {
          proj: '=project'
      },
      controller: ProjectListItemCtrl,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ProjectListItemCtrl() {
      var vm = this;
    }
  }

})();
