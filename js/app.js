var app = angular.module('angularfire-todomvc', ['firebase']);

app.controller('todoController', ['$firebase', function($firebase){
	var firebaseRef = new Firebase('https://angularfire-todomvc.firebaseio.com/');

	$scope.items = firebaseRef.child('items');
}]);

app.directive('listDisplay', function () {
	return{
		replace: true,
		restrict: 'E',
		templateUrl: '../views/list-info.html',
		controller: function ($firebase) {
			this.checkOff = function () {
				
			};
		}
	};
});