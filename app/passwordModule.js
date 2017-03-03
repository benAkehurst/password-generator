(function(){

	"use strict";

	var passwordModule = angular.module("passwordModule", []);
	
	var arrAllDigits = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"_","!","#","$","%","&","+","*","-"];

	passwordModule.controller("PasswordController", function($scope){

		$scope.generatePassword = function(){

			// shuffles the array of characters
			var generatePassword = shuffleArray(arrAllDigits);

			// calls a function that makes the shuffled array only 8 charaters
			var eightCharPassword = eightCharGenerate(arrAllDigits);

			// sends the new 8 char password to the view
			$scope.newEightCharPassword = eightCharPassword.newPassword;

		}
	});

	function shuffleArray(all) {
    	
    	for (var i = all.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));

        	var temp = all[i];
        	all[i] = all[j];
       		all[j] = temp;
    	}	
    	
    	return all;
	}

	function eightCharGenerate(eightDigit){
		var newEightCharPassword = eightDigit[0] + eightDigit[1] + eightDigit[2]+ eightDigit[3] + eightDigit[4]+ eightDigit[5] + eightDigit[6]+ eightDigit[7];

		return {"newPassword":newEightCharPassword};
	}

})();