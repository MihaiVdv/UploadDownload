/* globals $ */
'use strict';

angular.module('poetApp')
    .directive('poetAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
