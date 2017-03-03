(function(){

	"use strict";

	var appModule = angular.module("appModule", ["ngRoute", "passwordModule"]);

	appModule.config(function($routeProvider){
		$routeProvider.when("/",{
			controller: "PasswordController",
			templateUrl:"app/passwordView.html"
		});
	});

})();