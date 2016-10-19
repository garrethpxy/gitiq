(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .controller('ViewProjectDetailController', ViewProjectDetailController);

  /** @ngInject */
  function ViewProjectDetailController($stateParams, GithubDataService, $log, $state) {
    var vm = this;

    var projectName = $stateParams.projectName;
    var username = $stateParams.username;

    if(username && projectName){
      //retrieve the specified repo's readme contents
      vm.load = GithubDataService.getRepoReadmeContents(username, projectName)
      .then(function(contents){
        // note: `contents` are retrieved as raw markdown text
        // and will be processed into html at the template
        vm.contents = contents;  
      });
    }
    else{
      $log.info("No username and/or projectName provided. Routing back to search page");
      $state.go('home');
    }
  }
})();
