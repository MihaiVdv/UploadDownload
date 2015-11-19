'use strict';

angular.module('poetApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


