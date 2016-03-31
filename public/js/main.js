angular.module('mean', ['ngRoute']).config(function($routeProvider){

	$routeProvider.when('/contacts', {
		templateUrl: 'partials/contacts.html',
		controller: 'ContactsController'
	});

	$routeProvider.when('/contato/:contatoId', {
    	templateUrl: 'partials/contact.html', 
    	controller: 'ContactController'
  });

	$routeProvider.otherwise({redirectTo: '/contacts'});

});