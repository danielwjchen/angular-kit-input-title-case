/**
 * Defines ng-kit-input-title-case directive to format input value to title case
 */
(function(angular) {
    'use strict';
    angular.module('ng-kit.input-title-case')
    .directive('ngKitInputTitleCase', function($parse) {
        return {
            require: 'ngModel',
            link: function($scope, $element, $attrs, $modelCtrl) {
                var capitalize = function(inputValue) {
                    if (typeof inputValue === 'number') {
                        inputValue = inputValue.toString();
                    } else if (typeof inputValue !== 'string') {
                        inputValue = '';
                    }
                    var capitalizedPieces = [];
                    inputValue.split(' ').forEach(function(piece) {
                        capitalizedPieces.push(
                            piece.charAt(0).toUpperCase() + piece.substring(1)
                        );
                    });
                    var capitalized = capitalizedPieces.join(' ');
                    if (capitalized !== inputValue) {
                        $modelCtrl.$setViewValue(capitalized);
                        $modelCtrl.$render();
                    }
                    return capitalized;
                };
                $modelCtrl.$parsers.push(capitalize);
                capitalize($parse($attrs.ngModel)($scope));
            },
        };
    });
})(angular);