(function () {
    angular.module("Cssp").controller("HomeController", HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        vm.apps = [
            {
                Name: 'Application 1',
                State: ''
            },
            {
                Name: 'Application 2',
                State: ''
            },
            {
                Name: 'Application 3',
                State: ''
            },
            {
                Name: 'Application 4',
                State: ''
            }
        ]
    }
})();