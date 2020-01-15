(function(){
	'use strict';
	angular.module("LaunchCheck",[])
	.controller("LaunchCheckController",LaunchCheckController);

	LaunchCheckController.$inject = ["$scope"];


	function LaunchCheckController($scope){
		$scope.dishes="";
		$scope.display = function(){
			var dishes_list = $scope.dishes.split(",");
			if ($scope.dishes==0){
				$scope.text = "Please Enter data first";
			}
			else if (dishes_list.length<=3){
				$scope.text= "Enjoy!";
			}
			else{
				$scope.text = "Too much!";
			}
		};
	};

	

})();