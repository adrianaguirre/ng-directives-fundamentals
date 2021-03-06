angular.module('app', []);

angular.module('app').controller('MainController', function ($scope) {
    $scope.size = 150;
});

angular.module('app').directive('fontScale', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            scope.$watch(attrs['fontScale'], function (newVal) {
                el.css('font-size', newVal + '%');
            })
        }
    }
});



