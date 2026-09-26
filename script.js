console.log("rock paper scissors")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// getHumanChoice gets one of three values "rock", "paper" or "scissors"
// a user is prompted to choose one of three values "rock", "paper" or "scissors"
// the user input is stored in a variable choice 
function getHumanChoice() {
    let input = ''
    
    while (!input) {
        input = prompt("please enter [rock, paper or scissors]?")

        if (input == "rock" || input == "paper" || input == "scissors") {
            break;
        } 
        input = ""
    }
    return input
}

// getComputerChoice gets one of three values "rock", "paper" or "scissors"
// the getComputer choice is called to get the computers choice and is stored in a variable computer choice
function getComputerChoice() {
    let choice = getRandomInt(3) 
    if (choice == 0)
        return "rock"
    if (choice == 1)
        return "paper"
    if (choice == 2)
        return "scissors"
    throw "invalid computer choice generated"
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`)

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

