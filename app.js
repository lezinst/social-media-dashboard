var app = angular.module('App',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider

	.state('home', {
		url: '/social-platform',
		templateUrl: 'public/home.html',
		controller: 'homeControl'
	})
	.state('networks', {
		//this is going to retrieve the clicked on currentNetwork which will be entered into the resolve. 
		//The current network will be shown inside of the directive inside of defaultNetworkPage.html
		url:'/social-platform/:provider',
		templateUrl: 'public/templates/chosenNetworkPage.html',
		controller: 'network_control'
		// NOTE: I had this in here originally,it worked, but I chose to go with a loading screen instead(versus a blank screen). This API was slow -- so bad for user experience.
		// resolve:  {
	 	// 	currentNetwork : function(socialNetworkFactory, $stateParams){
		// 	var provider = $stateParams.id;
	 	// 	return socialNetworkFactory.retrieve(provider);
	 	// 	}
			
	});

	$urlRouterProvider.otherwise('/social-platform');

});