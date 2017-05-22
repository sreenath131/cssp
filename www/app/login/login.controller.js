(function () {
    angular.module("Cssp").controller("LoginController", LoginController);
    LoginController.$inject = ['$state','$http','$resource'];
    function LoginController($state,$http,$resource) {
        var vm = this;
        vm.studentLogin = studentLogin;
        vm.adminLogin = adminLogin;
        console.log("inside")

        vm.User = $resource('http://myonlai.com:8080/cssp/dimContent?dimName=Physical');

        function studentLogin(ev) {
            /*return $http.get('http://myonlai.com:8080/cssp/dimContent?dimName=Physical')
                .success(function(data, status, headers, config) {
                    console.log(data)
                })
                .error(function(error, status, headers, config) {
                    console.log(status);
                    console.log("Error occured");
                });*/
            $state.go('studentLogin')
        }

        function adminLogin() {

        }

    }
})();

[
    [ // resources
        {"contacts":"92401 CA","dimension_id":1,"dimension_name":"","email":"csusb@gmail.com","id":9,"name":"Japanese","others":"Imptt info","phone":"8189662468","web":"yahoo.com"},
        {"contacts":"92403 CA","dimension_id":1,"dimension_name":"","email":"666@csusb.edu","id":3,"name":"Gym","others":"Others info","phone":"8189662468","web":"www.csusb.edu"},
        {"contacts":"Dr. Mnist","dimension_id":1,"dimension_name":"","email":"writing@csusb.edu","id":11,"name":"Writing","others":"9am-6pm","phone":"90912355890","web":"writing.csusb.edu"}
    ],
    [ //clubs
        {"contact_name":"Gym club","dimensionName":"","dimension_id":1,"id":4,"name":"Gym","phone_no":"9493317408"},
        {"contact_name":"SU","dimensionName":"","dimension_id":1,"id":8,"name":"Student Union","phone_no":"909123456"}
    ],
    [ // goals
        {
            "actual_end_time":
                {
                    "date":19,"day":6,"hours":0,"minutes":0,"month":10,"seconds":0,"time":1479531600000,"timezoneOffset":300,"year":116
                },
                "dimension_id":1,
                "dimension_name":"",
                "final_score":100,
                "id":1,
                "name":"Exercise",
                "planned_end_time":
                    {"date":20,"day":0,"hours":0,"minutes":0,"month":10,"seconds":0,"time":1479618000000,"timezoneOffset":300,"year":116},
                    "progress":100,
                    "start_time":
                        {"date":20,"day":4,"hours":0,"minutes":0,"month":9,"seconds":0,"time":1476936000000,"timezoneOffset":240,"year":116},
                        "type":0,"user_id":1,"user_name":""
        }
    ],
    [ //workshop
        {"description":"Study Arboad","dimensi'onName":"","dimension_id":1,"id":17,"location":"SU","name":"Counseling","occur_time":1477420200000},
        {"description":"Abroad study","dimensionName":"","dimension_id":1,"id":18,"location":"JB Hall","name":"OralEnglish","occur_time":1480188600000}
    ],
    [ //tutorial
        {"description":"About Health","dimensionName":"","dimension_id":1,"id":14,"name":"StudentHealth","url":"health.csusb.edu"},
        {"description":"About Mental","dimensionName":"","dimension_id":1,"id":15,"name":"Mental","url":"mental.health.edu"},
        {"description":"Yoga ","dimensionName":"","dimension_id":1,"id":16,"name":"Yoga","url":"yoga.com"}
    ]
]