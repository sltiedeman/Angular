angular.module('myApp', []).controller('myController', function($scope){
	$scope.items = [
		{
			name: "Freddy",
			desc: "Made a cool weather widget"
		},
		{
			name: "Chance",
			desc: "Loves Bootstrap"
		},
		{
			name: "Stuart",
			desc: "Drove a long ways to get here today..."
		},
		{
			name: "Will",
			desc: "The tall one"
		},
		{
			name: "Rob",
			desc: "The teach"
		}
	];
});
