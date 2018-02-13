var app = angular.module("myGalacticDirectory", []);
app.controller("myGalacticDirectoryController", function ($scope, $http) {
    $scope.banner = "Galactic Directory"
    $http.get("/getList")
    .then(function(response) {
        $scope.people = response.data.people;
    });
});