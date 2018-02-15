var app = angular.module("myGalacticDirectory", []);
app.controller("myGalacticDirectoryController", function ($scope, $http) {
    $scope.banner = "Galactic Directory"
    $scope.pageNumbers = function (num) {
        return new Array(num);
    }
    $scope.getPageNumber = function (page) {
        $http.get("/getPage", {
            params: {
                page: page
            }
        }).then(function (response) {
            $scope.resultsFound = response.data.resultsFound;
            $scope.people = response.data.people;
            $scope.pages = response.data.pages;
            $scope.selectedPage = response.data.selectedPage;
        });
    }
    $http.get("/getList")
        .then(function (response) {
            $scope.resultsFound = response.data.resultsFound;
            $scope.people = response.data.people;
            $scope.pages = response.data.pages;
            $scope.selectedPage = response.data.selectedPage;
        });
});