var prjDetailsApp = angular.module('prjDetailsApp',['ngRoute','prjDetailsAppCtrl','prjDetailService']);

prjDetailsApp.config(['$routeProvider',function($routeProvider) {
		$routeProvider.
		when('/projects',{
			templateUrl:'partials/projectList.html',
			controller:'prjListCtrl'
		}).
		when('/projects/:projectId',{
			templateUrl:'partials/projectDetails.html',
			controller:'prjDetailsCtrl'
		}).
		when('/projects/:projectId/:userStoryId',{
			templateUrl:'partials/projectUserStoryDetail.html',
			controller:'prjUserStoryDetailCtrl'
		}).
		when('/projects/:projectId/:userStoryId/:taskId',{
			templateUrl:'partials/projectTaskDetail.html',
			controller:'prjUserStoryTaskDetailCtrl'
		}).
		otherwise ({
			redirectTo:'/projects'
		});
}])