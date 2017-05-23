(function(){
    angular.module('Assessment').controller('AssessmentController',AssessmentController);
    AssessmentController.$inject = ['AssessmentService'];
    function AssessmentController(AssessmentService) {
       var vm =this;
        AssessmentService.getCampusResource().then(function success(response){
            console.log(response.data)
            vm.campusResource = response.data;
        },function error(error){

        });
        console.log(vm.campusResource)
    }
})();