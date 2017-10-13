myApp.controller('AppCtrl', function($scope, $http, $rootScope, $location, $localStorage) {
  //$scope.message = 'Hello World!'; 
	$scope.emailFlag = false;
	$scope.init = function () {
		if(null!=$localStorage.email){
			$scope.emailFlag = false;
			$localStorage.email = null;
		}
	};
  $scope.verifyUser = function(emailId, secretCode){
	    console.log("Entered in root scope function");
		console.log(emailId);
		$http.get("http://localhost:1020/api/login?id="+emailId+"&code="+secretCode).
		then(function(response) {
		    console.log(response);
		    if(""!= response.data){
			    $localStorage.email = response.data.id;
			    $location.path("todos");		    	
		    }
		  }, function(response) {	  
		  });
	}
	
	$scope.createUser = function(){
	    console.log("Entered in create User method");
	    var profile = {
	    		"id":$scope.emailRegister,
	    		"secretCode":$scope.secretCodeRegister,
	    		"mobileNumber":$scope.mobileNum,
	    		"dateOfBirth":$scope.dob,
	    		"fullName":$scope.fullName
	    }
		$http.post("http://localhost:1020/api/createUser", profile).
		then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	$localStorage.email = response.data.id;
			    $location.path("todos");
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
	
});