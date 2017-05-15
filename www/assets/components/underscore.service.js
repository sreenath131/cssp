(function () {
    var underscore = angular.module("underscore", []);

    underscore.factory('_', _underscore);

    _underscore.$inject = ['$window'];

    function _underscore($window) {
        return $window._;
    }
})();