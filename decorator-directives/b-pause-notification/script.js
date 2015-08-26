angular.module('app', []);

angular.module('app').controller('mainController', function ($scope) {
    $scope.messages = [];
    $scope.handlePause = function (e) {
        console.log(e);
        console.log('paused!');
        $scope.messages.push({text: 'paused!'});
    }
});

angular.module('app').directive('eventPause', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {

            // parse function from attribute
            var fn = $parse(attrs['eventPause']);

            // access a function that is passsed in as a property
            el.on('pause', function (event) {
                scope.$apply(function () {
                    fn(scope, {evt: event} )
                })
            })
        }
    }
})

angular.module('app').directive('spacebarSupport', function () {
    return {
        restrict: 'A',
        link: function (scope, el, attrs) {
            $('body').on('keypress', function (evt) {
                var vidEl = el[0];
                if (evt.keyCode === 32) {
                    if (vidEl.paused) {
                        vidEl.play();
                    }
                    else {
                        vidEl.pause();
                    }
                }
            })
        }
    }
})
