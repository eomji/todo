'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('headerCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    console.log( " load header ctrl ");
    
    $scope.test = function() {
//        console.log( "click");
        var parser = document.createElement('a');
        parser.href = window.location;
        console.log( parser.href );
        console.log(parser.hash );
         var result = parser.hash.replace(/#\//,'').replace(/^\/|\/$/g,'')
        console.log( result  );
    }
  });
