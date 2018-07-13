var ionicApp = angular.module('ionicApp', []);
ionicApp.controller('LoginController',function($scope,$rootScope, $stateParams, $state, LoginService){
  $rootScope.title = "AngularJS Login Sample";
  $scope.login = function(){
   if(LoginService.login($scope.username, $scope.password)) {
		$rootScope.userName = $scope.username;
		$scope.error = '';
		$scope.username = '';
		$scope.password = '';
		$state.transitionTo('home');
	}else{
		$scope.error = "Incorrect username/password !";
	} 
  };
});

ionicApp.controller('HomeController', 
function($scope, $rootScope, $stateParams, $state, LoginService) {
$scope.user = $rootScope.userName;
});

/*angular.module('ionicApp', ['ionic'])
.controller('loginCtrl', LoginCtrl);*/