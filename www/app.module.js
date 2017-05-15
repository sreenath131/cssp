(function () {
    angular.module("Cssp", [
        'ui.router',
        'ngMaterial',
        'underscore'
    ])

        .constant('appconfig', {
            'TIMEOUT': 1800000,
        })

        .run(function ($rootScope, $location, $state, $stateParams, $timeout, $document, appconfig, $mdToast) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            var eventArry = ['keydown', 'keyup', 'click', 'dblclick', 'movemouse', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'scroll', 'focus', 'change', 'select'];
            var maxIdleSession = appconfig.TIMEOUT;
            var bodyElement = angular.element($document);

            $rootScope.$on('$stateChangeStart', function (event, toState) {
                var timeOutThread = $timeout(function () { logoutSession(); }, maxIdleSession);
                if (toState.name != 'login') {
                    angular.forEach(eventArray, function (eventName) {
                        bodyElement.on(eventName, function (e) {
                            ResetIdleSession(e);
                        })
                    })
                }
                else if (toState.name == 'login') {
                    unbindTimerEvents();
                }

                function ResetIdleSession(e) {
                    $timeout(function () { logoutSession(); }, maxIdleSession);
                }

                function logOutSession() {
                    unbindTimerEvents();
                    $state.go('login');
                }

                function unbindTimerEvents() {
                    $timeout.cancel(timeOutThread);
                    angular.forEach(eventArray, function (eventName) {
                        bodyElement.off(eventName)
                    })
                }
            })//$rootScope.$on('$stateChangeStart')

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                $state.go(toState);
            })
        })
})();

