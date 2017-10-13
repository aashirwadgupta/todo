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
	
	$scope.addPendingToDo = function(isDone, toDo){
		if(isDone==undefined){
			isDone = false;
		}
		var d = new Date().getTime();
		if(null != $scope.taskList[d]){
			d = d +1000;
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDoText:toDo
			}
		} else {
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDoText:toDo
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
		$scope.updateToDo($scope.toDoModel);
	}
	
	$scope.deleteToDo = function(key){
		console.log(key);
		delete $scope.toDoModel.taskList[key];
		$scope.updateToDo($scope.toDoModel);
	}
	
	$scope.updateToDo = function(toDoModelObj){
		$http.post("http://localhost:1020/api/updateToDo", toDoModelObj)
		.then(function(response) {
		    console.log(response);
		    if(null!=response.data){
		    	//$localStorage.email = response.data.id;
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
					toDoText:task
			}
		} else {
			$scope.taskList[d] = {
					isCompleted:isDone,
					toDoText:task
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