(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(toastr, $state) {
    var vm = this;

    vm.entry = {
      username: "" //default input empty string
    };
    
    vm.triggerSearch = function(){
      var searchTerm = vm.entry.username;

      //if no search term is provided, show a toast message
      if(!searchTerm){
        toastr.error("Must enter a search term to proceed");
      }
      else{
        //else route to user projects page
        $state.go('user-projects', {username: searchTerm});
      }
    } 
  }
})();
