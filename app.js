// cache the DOM
const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const wall_div = document.getElementById("w");

function getComputerChoice() { 
	const choices = ['r', 'p', 'w'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber]
}
function game(userChoice) {
	const computerChoice = getComputerChoice();
	//console.log("user choice => " + userChoice);	
	//console.log("computer choice => " + computerChoice);

	/*let name = "dianne";	
	if (name === "dianne") {
		console.log('hello')
	} else if (name === "pine") {
		console.log('hey')
	}*/

	/*let name = "pine"
	switch (name) {
		case "apple":
			console.log("this is apple");
			break;
		case "pine":
			console.log("this is pine");
			break;	*/
	switch (userChoice + computerChoice) {
		case "rw":
		case "pr":
		case "wp":
			console.log("USER WINS");
			break;
		case "rp":
		case "pw":
		case "wr":	
			console.log("USER LOSES");
			break;
		case "rr":
		case "pp":
		case "ww":	
			console.log("It's a draw");
			break;	
	}		
}

function main() {
  rock_div.addEventListener('click', function() {
	  game("r");
  })

  paper_div.addEventListener('click', function() {
	  game("p");
  })

  wall_div.addEventListener('click', function() {
	  game("w");
  })
}

main();