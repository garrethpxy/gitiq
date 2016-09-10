(function() {
  'use strict';

  angular
    .module('gitiqproj')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
