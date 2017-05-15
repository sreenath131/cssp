(function () {
    angular.module("Cssp").controller("StudentLoginController", StudentLoginController);

    StudentLoginController.$inject = ['_','$state'];

    function StudentLoginController(_,$state) {
        var vm = this;
        vm.form = {};
        vm.error = false
        vm.user = {
            userName: null,
            password: null
        }

        vm.users = [
            {
                userName: 'sayali',
                password: 'sayali',
                isRegistered: true,
                isAdmin: false
            },
            {
                userName: 'sanjay',
                password: 'sanjay',
                isRegistered: false,
                isAdmin: false
            },
            {
                userName: 'sreenath',
                password: 'sreenath',
                isRegistered: true,
                isAdmin: true
            }
        ];

        vm.login = login;

        function login() {
            var obj = _.findWhere(vm.users, { userName: vm.user.userName });
            if (obj.password == vm.user.password) {
                console.log(obj)
                if (obj.isRegistered) {
                    console.log("inside if of student login")
                    $state.go('root');
                }
                else {
                    $state.go('registerPage');
                }
            }
            else {
                vm.error = true;
            }
        }
    }
})();