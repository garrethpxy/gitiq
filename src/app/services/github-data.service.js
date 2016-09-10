(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .factory('GithubDataService', GithubDataService);

  /** @ngInject */
  function GithubDataService($log, $http) {
    var api = 'https://api.github.com';

    return {
      /**
       * getUserRepos - takes in a github username and returns a promise
       * that resolves into an array of objects, each describing a repository
       */
      getUserRepos: function(username){
        var endpoint = api + "/users/" + username + "/repos";
        return $http.get(endpoint).then(function(res){
          return res.data;
        }).catch(this.errorHandler);
      },
      
      /**
       * getRepoReadmeContents - takes in a github username and a github repository name
       * returns a promise that resolves into raw markdown text
       */
      getRepoReadmeContents: function(username, repo){ //user must be owner
        var config = {
          method: 'GET',
          url: api + "/repos/" + username + "/" + repo + "/readme",
          headers: {
            'Accept':'application/vnd.github.VERSION.raw' //request content raw markdown
          }
        }
        return $http(config).then(function(res){
          return res.data;
        }).catch(this.errorHandler);
      },

      /**
       * Generic XHR Error Handler
       */
      errorHandler: function(error){
        $log.error('XHR Failed. \n' + angular.toJson(error.data, true));  
      }
    }
  }
})();
