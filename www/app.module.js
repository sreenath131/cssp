(function () {
    angular.module("Cssp", [
        'ui.router',
        'ngMaterial',
        'ngResource',
        'underscore',
        'Assessment',
        'mobile-angular-ui'
    ])

        .constant('appconfig', {
            'TIMEOUT': 1800000
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


/*[
    [
        {"contacts":"92401 CA","dimension_id":1,"dimension_name":"","email":"csusb@gmail.com","id":9,"name":"Japanese","others":"Imptt info","phone":"8189662468","web":"yahoo.com"},
        {"contacts":"92403 CA","dimension_id":1,"dimension_name":"","email":"666@csusb.edu","id":3,"name":"Gym","others":"Others info","phone":"8189662468","web":"www.csusb.edu"},
        {"contacts":"Dr. Mnist","dimension_id":1,"dimension_name":"","email":"writing@csusb.edu","id":11,"name":"Writing","others":"9am-6pm","phone":"90912355890","web":"writing.csusb.edu"}
    ],
    [
        {"contact_name":"Gym club","dimensionName":"","dimension_id":1,"id":4,"name":"Gym","phone_no":"9493317408"},
        {"contact_name":"SU","dimensionName":"","dimension_id":1,"id":8,"name":"Student Union","phone_no":"909123456"}
    ],
    [
        {"actual_end_time":
            {
                "date":19,
                "day":6,
                "hours":0,
                "minutes":0,
                "month":10,
                "seconds":0,
                "time":1479531600000,
                "timezoneOffset":300,
                "year":116
            },
            "dimension_id":1,
            "dimension_name":"",
            "final_score":100,
            "id":1,
            "name":"Exercise",
            "planned_end_time": {"date":20,"day":0,"hours":0,"minutes":0,"month":10,"seconds":0,"time":1479618000000,"timezoneOffset":300,"year":116},
            "progress":100,
            "start_time":{"date":20,"day":4,"hours":0,"minutes":0,"month":9,"seconds":0,"time":1476936000000,"timezoneOffset":240,"year":116},
            "type":0,"user_id":1,"user_name":""
        }
    ],
    [
        {"description":"Study Arboad","dimensionName":"","dimension_id":1,"id":17,"location":"SU","name":"Counseling","occur_time":1477420200000},
        {"description":"Abroad study","dimensionName":"","dimension_id":1,"id":18,"location":"JB Hall","name":"OralEnglish","occur_time":1480188600000}
    ],
    [
        {"description":"About Health","dimensionName":"","dimension_id":1,"id":14,"name":"StudentHealth","url":"health.csusb.edu"},
        {"description":"About Mental","dimensionName":"","dimension_id":1,"id":15,"name":"Mental","url":"mental.health.edu"},
        {"description":"Yoga ","dimensionName":"","dimension_id":1,"id":16,"name":"Yoga","url":"yoga.com"}
    ]
]*/

