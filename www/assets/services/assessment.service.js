(function () {
    angular.module('Services').factory('AssessmentService',AssessmentService);
    
    AssessmentService.$inject = ['$http'];
    
    function AssessmentService($http) {
        return{
            getCampusResource : function () {
                return $http({
                    method: 'GET',
                    url: '/api/v1/campusResource'
                })
            }
        }
    }
})();