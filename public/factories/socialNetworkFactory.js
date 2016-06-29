
angular.module('App').factory('socialNetworkFactory', function($http){

	var facebook = [];
	var twitter = [];
	var instagram = [];
	var tumblr = [];
//makes a GET request to the end point to retrieve all of the posts

	function retrieve(provider){
		return $http.get('https://nuvi-challenge.herokuapp.com/activities')
			.then(function(posts){
				filterPosts(posts.data);
				return sendPosts(provider);
			});		
	}
//Runs through all post objects and pushes it into the corresponding array above based on the provider property.	
	function filterPosts(posts){
		posts.forEach(function(post){
			switch(post.provider){
				case "facebook" :
					facebook.push(post);
					break;
				case "twitter" :
					twitter.push(post);
					break;
				case "instagram" :
					instagram.push(post);
					break;
				case "tumblr" : 
					tumblr.push(post);
			}
		});
	}
//Only the chosen provider will be sent to the view
	function sendPosts(provider){
		switch(provider){
			case "facebook" :
				return facebook;
				break;
			case "twitter" :
				return twitter;
				break;
			case "instagram" :
				return instagram;
				break;
			case "tumblr" : 
				return tumblr;					
		}
	}
	return {
		retrieve : retrieve
	};

});
		

//end of service
