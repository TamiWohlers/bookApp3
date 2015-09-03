var app = angular.module("bookApp2");

app.service('userService', function($http, $q){
	this.setUpUser = function(userObject){
		console.log('in userService', userObject);
		var deferred = $q.defer();
		var url = 'api/users/'
		$http({
			method: 'POST',
			url: url,
			data: userObject
		}).then(function(data){
			deferred.resolve(data)
		})
		return deferred.promise;
	}


this.logInUser = function(userObject){
	var deferred = $q.defer();
	var url = '/api/users/getId?=' + userObject.user + 'password?=' + userObject.password;
	$http({
		method: 'GET',
		url: url
	}).then(function(data){
		deferred.resolve(data)
		console.log(data);
	})

	return deferred.promise;
}

})