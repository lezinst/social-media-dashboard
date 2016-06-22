/* makes a GET request to the end point to retrieve all of the posts*/

angular.module('App').factory('socialNetworkFactory', function($http){

	var facebook = [];
	var twitter = [];
	var instagram = [];
	var tumblr = [];

	function retrieve(provider){
		return $http.get('https://nuvi-challenge.herokuapp.com/activities')
			.then(function(posts){
				filterPosts(posts.data);
				return sendPosts(provider);
			});		
	}
	
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
		
		
		
		// var twitterTweets = [];
		// var instagramPosts = [];
		// var facebookPosts = [];
		// var tumblrPosts = [];
	// 	}).then(function(data){
	// 		data.forEach(function(entry){
	// 			if(data.provider === 'twitter'){
	// 				twitterTweets.push(entry);
	// 			};
	// 			if(data.provider === 'instagram'){
	// 				instagramPosts.push(entry);
	// 			};
	// 			if(data.provider === 'facebook'){
	// 				facebookPosts.push(entry);
	// 			};
	// 			if(data.provider === 'tumblr'){
	// 				tumblrPosts.push(entry);
	// 			};

	// 		});
	// 	}).then(function(){
	// 		console.log()
	// 	})		
	// }


//end of service
