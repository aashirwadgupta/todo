myApp.controller('ProfileCtrl', function($scope, $http, $rootScope, $localStorage, $location) {
		
	$scope.updateUser = function(){
	    console.log("Entered in update User Profile method");
	    var profile = {
	    		"id":$scope.mailId,
	    		"fullName":$scope.fullName,
	    		"secretCode":$scope.secretCode,
	    		"mobileNumber":$scope.mobileNum,
	    		"dateOfBirth":$scope.dob
	    }
		$http.post("http://localhost:1020/api/updateUserProfile", profile).
		then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	$localStorage.email = response.data.id;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
	$scope.goToDos = function(){
		$location.path("/todos");
	}
	$scope.doLogout = function(){
		$localStorage.email = null;
		$location.path("/");
	}
	$scope.init = function(){
	    console.log("Entered in get User Profile method");
	    $scope.userId = $localStorage.email;
		$http.get("http://localhost:1020/api/userProfile?id="+$scope.userId).
		then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	$localStorage.email = response.data.id;
				$scope.profile = response.data;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
  $scope.message = 'Hello World! From Profile';  
  
});