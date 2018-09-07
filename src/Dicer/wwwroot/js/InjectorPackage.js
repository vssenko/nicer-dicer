function InjectorPackage() {
    var myApp = angular.module('mainApp', []);

    myApp.controller('HomeController', ['$scope', '$timeout', HomeController]);
    HomeController.$inject = ['$scope','$timeout'];
}