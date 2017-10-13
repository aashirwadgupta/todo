myApp.controller('ToDoCtrl', function($scope, $http, $rootScope, $localStorage, $location) {

	
	$scope.init = function(){
		var userId = $localStorage.email;
		$scope.userId = userId;
		$http.get("http://localhost:1020/api/getToDo?id="+userId)
		.then(function(response) {
		    console.log(response);
		    if(response.data==""){
		    	$scope.toDoModelFlag = true;
		    } else {
		    	$scope.toDoModelFlag = false;
		    	$scope.toDoModel = response.data;
		    	$scope.taskList = response.data.taskList;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
$scope.taskList = {};
	
	$scope.addPendingToDo = function(isDone, toDoText){
		if(isDone==undefined){
			isDone = false;
		}
		var d = new Date().getTime();
		if(null != $scope.taskList[d]){
			d = d +1000;
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDo:toDoText
			}
		} else {
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDo:toDoText
			};
		}
		console.log($scope.taskList);
		console.log($scope.toDoModel);
		if($scope.toDoModel == undefined){
			$scope.toDoModel = {};
			$scope.toDoModel['id'] = $scope.userId;
			$scope.toDoModel['taskList'] = $scope.taskList;
		} else if($scope.toDoModel.taskList == undefined) {
			$scope.toDoModel['id'] = $scope.userId;
			$scope.toDoModel['taskList'] = $scope.taskList;
		} else {
			$scope.toDoModel.taskList = $scope.taskList;
		}
		console.log($scope.toDoModel);
    	$scope.toDoModelFlag = false;
		$scope.updateToDo();
	}
	
	$scope.deleteToDo = function(key){
		delete $scope.toDoModel.taskList[key];
		$scope.updateToDo();
	}
	
	$scope.updateToDo = function(){
		$http.post("http://localhost:1020/api/updateToDo", $scope.toDoModel)
		.then(function(response) {
		    console.log(response);
		    if(""!=response.data){
		    	$scope.toDoModelFlag = false;
		    }
		  }, function(response) {
			    console.log(response);			  
		  });
	}
	$scope.createToDo = function(task){
		var userId = $localStorage.email;
		var d = new Date().getTime();
		if(null != $scope.taskList[d]){
			d = d +1000;
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDo:toDoText
			}
		} else {
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDo:toDoText
			};
		}
		$scope.toDoModel.taskList = $scope.taskList;
		/*var toDoModel = {
			"taskList":taskList
		}*/
		$http.post("http://localhost:1020/api/createToDo?id="+userId, toDoModel);
	}
	
	$scope.goProfile = function(){
		$location.path("/profile");
	}
	$scope.doLogout = function(){
		$localStorage.email = null;
		$location.path("/");
	}
});