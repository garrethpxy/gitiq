(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .config(projectsRouterConfig);

  /** @ngInject */
  function projectsRouterConfig($stateProvider) {
    $stateProvider
      .state('user-projects', {
        url: '/user/:username',
        templateUrl: 'app/projects/view-user-projects.html',
        controller: 'ViewUserProjectsController',
        controllerAs: 'VUPCtrl'
      })

      .state('user-projects.project-detail', {
        url: '/:projectName',
        templateUrl: 'app/projects/view-project-detail.html',
        controller: 'ViewProjectDetailController',
        controllerAs: 'VPCtrl'
      });
  }

})();
