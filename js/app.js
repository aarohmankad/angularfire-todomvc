(function () {
	var app = angular.module('angularfire-todomvc', ['firebase']);

	app.controller('todoController', ['$scope', '$firebase', function($scope, $firebase){
		
		var firebaseRef = new Firebase('https://angularfire-todomvc.firebaseio.com/items');
		this.items = $firebase(firebaseRef);

	}]);

	app.directive('listInput', function () {
		return{
			replace: true,
			restrict: 'E',
			templateUrl: '../views/list-input.html',
			controller: function ($scope, $firebase) {
				
				$scope.submitItem = function (e, items) {
					if(e.keyCode != 13) return;
					
					items.$add({
						body: $scope.newItem,
						checkedOff: false
					});

					$scope.newItem = "";
				};

			},
			controllerAs: 'list-input'
		};
	});

	app.directive('listDisplay', function () {
		return{
			replace: true,
			restrict: 'E',
			templateUrl: '../views/list-display.html',
			controller: function ($scope, $firebase) {
				
			},
			controllerAs: 'list-display'
		};
	});
})();