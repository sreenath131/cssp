(function () {
    angular.module("Cssp").controller("HomeController", HomeController);

    HomeController.$inject = [];

    function HomeController() {
        var vm = this;
        vm.apps = [
            {
                Name: "Toastmasters at CSUSB",
                President_First_Name: "Christopher",
                President_Last_Name: "Evelynveere",
                President_Cell_Phone_Number: "951-534-3066",
                President_CSUSB_Email_Address: "cgeveere@hotmail.com",
                Category: "Social Clubs & Organizations"
            },

            {
                Name: "Inland Empire Future Leaders",
                President_First_Name: "Raylene",
                President_Last_Name: "Perez",
                President_Cell_Phone_Number: "909-380-1814",
                President_CSUSB_Email_Address: "perer355@coyote.csusb.edu",
                Category: "Service or Support Organizations"
            }
        ]
    }
})();