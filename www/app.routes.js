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

            .state('root.assessment', {
                url: 'assessment',
                views: {
                    'content@root': {
                        templateUrl: 'app/Assessment/index/assessment-index.html',
                        controller: 'AssessmentController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.css', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/Css/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.emotional', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.enviornment', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.mental', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.occupational', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.physical', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('root.social', {
                url: '/',
                views: {
                    'content@root': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                }
            })
    }
})();