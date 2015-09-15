var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/',
			{
				templateUrl: 'includes/contacts-list.html',
				controller: 'ContactsController'
			}
		)
		.when('/add',
			{
				templateUrl: 'includes/add-contact.html',
				controller: 'AddController'
			}
		)
		.when('/contact/:id',
			{
				templateUrl: 'includes/contact-page.html',
				controller: 'ContactController'

			}
		)
		.otherwise({redirectTo: '/'});
});

app.controller('ContactsController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {
	var ref = new Firebase("https://intense-heat-987.firebaseio.com");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  console.log('$scope.data ' , $scope.data);

} ]);