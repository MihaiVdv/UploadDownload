/* globals $ */
'use strict';

angular.module('poetApp')
    .directive('poetAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
