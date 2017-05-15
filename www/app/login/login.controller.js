(function () {
    angular.module("Cssp").controller("LoginController", LoginController);
    LoginController.$inject = ['$state'];
    function LoginController($state) {
        var vm = this;
        vm.studentLogin = studentLogin;
        vm.adminLogin = adminLogin;

        function studentLogin(ev) {
            $state.go('studentLogin')
        }

        function adminLogin() {

        }

    }
})();