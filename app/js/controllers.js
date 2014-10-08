var prjDetailsAppCtrl = angular.module('prjDetailsAppCtrl',[]);


prjDetailsAppCtrl.controller('prjListCtrl',['$scope','Project', function($scope,Project) {
	$scope.projects = Project.query();
}
]);

prjDetailsAppCtrl.controller('prjDetailsCtrl',['$scope','$routeParams','Project', function($scope,$routeParams,Project) {
	$scope.project = Project.get({projectId:$routeParams.projectId},function(project){	
	});	
}
]);

prjDetailsAppCtrl.controller('prjUserStoryDetailCtrl',['$scope','$routeParams','UserStory', function($scope,$routeParams,UserStory) {
	$scope.userstory = UserStory.get({userStoryId:$routeParams.userStoryId,projectId:$routeParams.projectId},function(userstory){	
	});	
}
]);
prjDetailsAppCtrl.controller('prjUserStoryTaskDetailCtrl',['$scope','$routeParams','Task', function($scope,$routeParams,Task) {
	$scope.task = Task.get({userStoryId:$routeParams.userStoryId,projectId:$routeParams.projectId,taskId:$routeParams.taskId},function(task){	
	});	
}
]);
