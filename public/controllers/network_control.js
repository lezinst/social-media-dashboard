angular.module('App').controller('network_control', function($scope, socialNetworkFactory, $stateParams){

    init();

    function init(){
            retrieve();
            console.log('init():', 'init');
        }

    function retrieve(){
        $scope.waitingForNetwork = true;

        $scope.provider = $stateParams.provider;
        console.log("$scope.provider", $scope.provider);

        socialNetworkFactory
        .retrieve($scope.provider)
        .then(function(socialMediaPostsObject){
            if(socialMediaPostsObject){
            $scope.posts = socialMediaPostsObject;
            $scope.waitingForNetwork = false;
            }
        console.log("scope.posts", $scope.posts);
        });
    };	

});