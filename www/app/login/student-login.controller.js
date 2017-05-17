(function () {
    angular.module("Cssp").controller("StudentLoginController", StudentLoginController);

    StudentLoginController.$inject = ['_','$state'];

    function StudentLoginController(_,$state) {
        var vm = this;
        vm.form = {};
        vm.error = false;
        vm.user = {
            userName: null,
            password: null
        }

        vm.users = [
            {
                userName: 'sayali',
                password: 'sayali',
                isFirstTime: false,
                isAdmin: false
            },
            {
                userName: 'sanjay',
                password: 'sanjay',
                isFirstTime: true,
                isAdmin: false
            },
            {
                userName: 'sreenath',
                password: 'sreenath',
                isFirstTime: false,
                isAdmin: true
            }
        ];

        vm.login = login;

        function login() {
            var obj = _.findWhere(vm.users, { userName: vm.user.userName });
            if (obj.password == vm.user.password) {
                console.log(obj)
                if (!obj.isFirstTime) {
                    console.log("inside if of student login")
                    $state.go('root');
                }
                else {
                    setup();
                }
            }
            else {
                vm.error = true;
            }
        }

        function setup() {
            //code for dialog
            
            function setupController() {
                //controller code
            }
        }
    }
})();