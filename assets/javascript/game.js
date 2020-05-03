$(document).ready(function(){

	var randomNumber = 0;
	var redGemNum = 0;
	var greenGemNum = 0;
	var yellowGemNum = 0;
	var blueGemNum = 0;

    // Generates the Random Number between 19 and 120 and pushes it to the page
	function randomNumberGenerator() {
		randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
		console.log("The Random Number is: " + randomNumber);
		$("#randomNumberId").html(randomNumber);
	}

   	//Generates random numbers for each gem
   	function randomGemValuesGenerator() {
		//Red Gem
		redGemNum = Math.floor(Math.random() * 12) + 1;
		console.log("The Red Gem's value is: " + redGemNum);

   		//Green Gem
		greenGemNum = Math.floor(Math.random() * 12) + 1;
		console.log("The Green Gem's value is: " + greenGemNum);

		//Yellow Gem
		yellowGemNum = Math.floor(Math.random() * 12) + 1;
		console.log("The Yellow Gem's value is: " + yellowGemNum);

		//Blue Gem
		blueGemNum = Math.floor(Math.random() * 12) + 1;
		console.log("The Blue Gem's value is: " + blueGemNum);
   	}
	
	//Call above functions to start first game

		randomNumberGenerator();
		randomGemValuesGenerator();
		

	//Creates variables for Total Score and wins and losses that will be updated
	var yourScoreIs = 0;
	var wins = 0;
	var losses = 0;

    //When a gem is clicked, adds gem's value to Total Score and pushes it to page
    
   		//Red Gem
		$("#redGem").on("click", function() {
			yourScoreIs = yourScoreIs + redGemNum;
			console.log(yourScoreIs);
			$("#yourScore").html(yourScoreIs);

		//Conditions for win or lose checked after every click

		//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
				}

		//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("SORRY, YOU LOST");
					console.log("YOU LOST");
				}
		});

		//Green Gem
		$("#greenGem").on("click", function() {
			yourScoreIs = yourScoreIs + greenGemNum;
			console.log(yourScoreIs);
			$("#yourScore").html(yourScoreIs);

		//Conditions for win or lose are checked after every click

		//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
				}

		//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("SORRY, YOU LOST");
					console.log("YOU LOST");
				}
		});

		
		//Yellow Gem
		$("#yellowGem").on("click", function() {
			yourScoreIs = yourScoreIs + yellowGemNum;
			console.log(yourScoreIs);
			$("#yourScore").html(yourScoreIs);

		//Conditions for win or lose are checked after every click

		//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
				}

		//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("SORRY, YOU LOST");
					console.log("YOU LOST");
				}
		});

		//Blue Gem
		$("#blueGem").on("click", function() {
			yourScoreIs = yourScoreIs + blueGemNum;
			console.log(yourScoreIs);
			$("#yourScore").html(yourScoreIs);

		//Conditions for win or lose are checked after every click

		//When user wins, update wins, update message
				if (yourScoreIs === randomNumber) {
					wins = wins + 1;
					$("#wins").html("Wins: " + wins);
					$("#message").html("YOU WIN");
					console.log("YOU WIN");
				}

		//When user loses, update losses, update message, reset Random Number and Gem Values
				if (yourScoreIs > randomNumber) {
					losses = losses + 1;
					$("#losses").html("Losses: " + losses);
					$("#message").html("SORRY, YOU LOST");
					console.log("YOU LOST");
				}
		});

	//======

	//Reset Game Stats
		//When the user clicks on the reset button, reset all game stats:
		$("#reset").on("click", function() {
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
			$("#message").html("   ");
			randomNumberGenerator();
			randomGemValuesGenerator();
		});

   // All code STOPS here:

});