(function(){

	"use strict";

	var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9,"_","!","#","$","%","&","+","*","-"];
	var upperCase = ["A","B","C","D","E","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var numbers = [0,1,2,3,4,5,6,7,8,9];
	var symbols = ["_","!","#","$","%","&","+","*","-"];

	$(function(){

		$("#buttonGenerate").click(function(){
			var generatePassword = shuffleArray(lowerCase,upperCase,numbers,symbols);

			var newPasswordEight = numbers[0] + lowerCase[1] + lowerCase[2] + symbols[3] + numbers[4] + lowerCase[5] + symbols[6] + upperCase[7];
			var newPasswordTen = lowerCase[0] + upperCase[1] + numbers[2] + upperCase[3] + numbers[4] + lowerCase[5] + symbols[6] + numbers[7] + lowerCase[8] + numbers[9];
			var newPasswordTwelve = symbols[0] + upperCase[1] + lowerCase[2] + lowerCase[3] + lowerCase[4] + numbers[5] + symbols[6] + upperCase[7] + upperCase[8] + upperCase[9] + lowerCase[10] + upperCase[11];

			// console.log(newPassword);

			$("#spanResultEight").text(newPasswordEight);
			$("#spanResultTen").text(newPasswordTen);
			$("#spanResultTwelve").text(newPasswordTwelve);
		});
		



	});

	function shuffleArray(lowerCase,upperCase,numbers,symbols) {
    	
    	for (var i = lowerCase.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	
        	var temp = lowerCase[i];
        	lowerCase[i] = lowerCase[j];
       		lowerCase[j] = temp;
    	}
    	for (var i = upperCase.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	
        	var temp = upperCase[i];
        	upperCase[i] = upperCase[j];
       		upperCase[j] = temp;
    	}
    	for (var i = numbers.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	
        	var temp = numbers[i];
        	numbers[i] = numbers[j];
       		numbers[j] = temp;
    	}
    	for (var i = symbols.length - 1; i > 0; i--) {
        	var j = Math.floor(Math.random() * (i + 1));
        	
        	var temp = symbols[i];
        	symbols[i] = symbols[j];
       		symbols[j] = temp;
    	}
    	
    	return lowerCase + upperCase + numbers + symbols;

	}

})();