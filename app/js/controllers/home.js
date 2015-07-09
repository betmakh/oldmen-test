angular.module('oldmenTest').controller('HomeCtrl', function ($scope, $http) {
    $scope.welcome = 'Welcome to Oldmen Test!';
    $scope.updateRegion = function (reg) {
    	$scope.countries = $scope.data.countries[reg];
    	if ($scope.countries && $scope.countries.length) {
    		$scope.modalClass = 'hidden';
    	} else {
    		$scope.updateCountry(reg);
    	}
    }
    $scope.updateCountry = function (country) {
    	$scope.contacts = $scope.data.contacts[country];
    	if ($scope.contacts.length) {
    		$scope.modalClass = '';
    	} else {
    		$scope.modalClass = 'hidden';
    	}
    }
    $http.get('../../data/contacts.json').
    success(function (data) {
    	$scope.data = data
    });
});
