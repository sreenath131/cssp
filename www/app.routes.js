(function () {
    'use strict';

    angular.module("Cssp").config(Routes);

    Routes.$inject = ['$stateProvider','$urlRouterProvider'];

    function Routes($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                views: {
                    'login': {
                        templateUrl: 'app/login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('studentLogin', {
                url: '/student-login',
                views: {
                    'studentLogin':{
                        templateUrl: 'app/login/student-login.html',
                        controller: 'StudentLoginController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('root', {
                url: '/',
                views: {
                    '': {
                        templateUrl: 'assets/layout/layout.html',
                        controller: 'LayoutController',
                        controllerAs: 'vm'
                    },
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
    }
})();