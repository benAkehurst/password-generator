(function(){

	"use strict";

	var passwordModule = angular.module("passwordModule", ['ngclipboard']);
	
	var arrAllDigits = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"_","!","#","$","%","&","+","*","-"];

	passwordModule.controller("PasswordController", function($scope, $window){

		$scope.options = [{ name: "Eight Charaters", id: 1 }, { name: "Ten Charaters", id: 2 }, { name: "Twelve Charaters", id: 3 }, { name: "Sixteen Charaters", id: 4 }];

		$scope.generatePassword = function(){

			// shuffles the array of characters
			var generatePassword = shuffleArray(arrAllDigits);

			if($scope.selectedNumber.id === 1){
				var eightCharPassword = eightCharGenerate(arrAllDigits);
				$scope.newPassword = eightCharPassword.newPassword;
			}
			else if($scope.selectedNumber.id === 2){
				var tenCharPassword = tenCharGenerate(arrAllDigits);
				$scope.newPassword = tenCharPassword.newPassword;
			}
			else if($scope.selectedNumber.id === 3){
				var twelveCharPassword = twelveCharGenerate(arrAllDigits);
				$scope.newPassword = twelveCharPassword.newPassword;
			}
			else if($scope.selectedNumber.id === 4){
				var sixteenCharPassword = sixteenCharGenerate(arrAllDigits);
				$scope.newPassword = sixteenCharPassword.newPassword;
			}

		}

        $scope.redirectToPasswordmeter = function(){
            $window.open('http://www.passwordmeter.com/', '_blank');
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

	function tenCharGenerate(tenDigit){

		// Makes a blank array
		var arr = [];
		// In a loop we put 10 random numbers into the array
		for (var i = 0; i < 10; i++) {	
			var num = parseInt((Math.random()*50));
			arr.push(num);
		}

		// The new password is made up of the randomized numbers and letters and there order
		var newTenCharPassword = tenDigit[arr[0]] + tenDigit[arr[1]] + tenDigit[arr[2]]+ tenDigit[arr[3]] + tenDigit[arr[4]]+ tenDigit[arr[5]] + tenDigit[arr[6]] + tenDigit[arr[7]] + tenDigit[arr[8]] + tenDigit[arr[9]];

		// the new random password is returned in an object to the variable that called it.
		return {"newPassword":newTenCharPassword};
	}

	function twelveCharGenerate(twelveChar){
		var arr = [];
		// In a loop we put 10 random numbers into the array
		for (var i = 0; i < 12; i++) {	
			var num = parseInt((Math.random()*50));
			arr.push(num);
		}
		var newTwelveCharPassword = twelveChar[arr[0]] + twelveChar[arr[1]] + twelveChar[arr[2]] + twelveChar[arr[3]] + twelveChar[arr[4]] + twelveChar[arr[5]] + twelveChar[arr[6]] + twelveChar[arr[7]] + twelveChar[arr[8]] + twelveChar[arr[9]] + twelveChar[arr[10]] + twelveChar[arr[11]];

		return {"newPassword":newTwelveCharPassword};
	}

	function sixteenCharGenerate(sixteenChar){
		var arr = [];
		// In a loop we put 10 random numbers into the array
		for (var i = 0; i < 16; i++) {	
			var num = parseInt((Math.random()*50));
			arr.push(num);
		}
		var newSixteenCharPassword = sixteenChar[arr[0]] + sixteenChar[arr[1]] + sixteenChar[arr[2]] + sixteenChar[arr[3]] + sixteenChar[arr[4]] + sixteenChar[arr[5]] + sixteenChar[arr[6]] + sixteenChar[arr[7]] + sixteenChar[arr[8]] + sixteenChar[arr[9]] + sixteenChar[arr[10]] + sixteenChar[arr[11]] + sixteenChar[arr[12]] + sixteenChar[arr[13]] + sixteenChar[arr[14]] + sixteenChar[arr[15]];

		return {"newPassword":newSixteenCharPassword};
	}

})();