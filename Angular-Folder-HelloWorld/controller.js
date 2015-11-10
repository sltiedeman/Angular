var controllers = angular.module('myApp', []);
controllers.controller('appController',appController);

function appController($scope){

	$scope.name = "World!";

	$scope.students = ["Will", "Peter", "Griffin", "Stuart", "Stephen", "Chance", "Andrew", "Oliver", "Freddy", "Yohske"];

	$scope.changeName = function(){
		$scope.name = "World (from button)";
	}
	$scope.addStudent = function(){
		$scope.students.push($scope.newName);
	}

}