var prjDetailService = angular.module('prjDetailService',['ngResource']);

prjDetailService.factory('Project',['$resource', function($resource) {
	
	return $resource('/projects/:projectId.json',{},{		
		query:  {
			method:'GET', params:{projectId:'projects'}, isArray:true
		}
	})
	
	
}]);

prjDetailService.factory('UserStory',['$resource', function($resource) {
	return $resource('/projects/:projectId/:userStoryId.json',{},{
		
		query:  {
			method:'GET', params:{projectId:'@projectId',storyId:'@storyId'}, isArray:true
		}
	})
	
	
}]);

prjDetailService.factory('Task',['$resource', function($resource) {
	return $resource('/projects/:projectId/:userStoryId/:taskId.json',{},{
		
		query:  {
			method:'GET', params:{projectId:'@projectId',storyId:'@storyId',taskId:'@taskId'}, isArray:true
		}
	})
	
	
}]);