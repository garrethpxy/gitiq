(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .controller('ViewUserProjectsController', ViewUserProjectsController);

  /** @ngInject */
  function ViewUserProjectsController($stateParams, GithubDataService, $state, $log) {
    var vm = this;
        
    vm.username = $stateParams.username;

    //get the specified user's projects. If a user is not specified, route back to search page.
    if(vm.username){
      vm.load = GithubDataService.getUserRepos($stateParams.username)
      .then(function(projects){

        //`projects` will be defined if the user exists
        if(angular.isDefined(projects)){
          vm.projects = projects;

          //if user has at least 1 project, get his profile photo from inside the first project obj
          if(projects.length){ 
            vm.avatarUrl = projects[0].owner.avatar_url;
          }  
        }
        else{
          //if user does not exist, show info message 
          vm.userNotFound = true;
        }
        
      });
    }
    else{
      $log.info("No username provided. Routing back to search page");
      $state.go('home');
    }
    
  }
})();
