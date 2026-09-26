console.log("rock paper scissors")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// getHumanChoice gets one of three values "rock", "paper" or "scissors"
// a user is prompted to choose one of three values "rock", "paper" or "scissors"
// the user input is stored in a variable choice 

// getComputerChoice gets one of three values "rock", "paper" or "scissors"
// the getComputer choice is called to get the computers choice and is stored in a variable computer choice

// determineWinner accepts humanChoice and computerChoice as arguments and prints to the console the winner!
// the humanChoice (lhs) is compared with the computerChoice (rhs)
// the two choices are compared to see who wins based on the choices and which one wins the match!

// IF "rock" vs. "rock" print "no winner."
// IF "rock" vs. "paper", "paper" wins. print "paper beats rock; computer wins!"
// IF "rock" vs. "scissors", "rock" wins. print "rock beats scissors human wins!"

// IF "paper" vs. "paper" no win. print "no winner."
// IF "paper" vs. "rock", "paper" wins. print "paper beats rock; human wins!"
// IF "paper" vs. "scissors" "scissors" wins. print "scissors beats paper; computer wins!"

// IF "scissors" vs. "scissors" print "no winner."
// IF "scissors" vs. "paper", "scissors" wins. print "scissors beeats paper; human wins!"
// IF "scissors" vs. "rock", "rock" wins. print "rock beats scissors; computer wins!"

