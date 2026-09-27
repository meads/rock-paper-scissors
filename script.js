console.log("rock paper scissors")

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// getHumanChoice gets one of three values "rock", "paper" or "scissors"
// a user is prompted to choose one of three values "rock", "paper" or "scissors"
// the user input is stored in a variable input 
function getHumanChoice() {
    let input = ""
    
    while (!input) {
        input = prompt("please enter [rock, paper or scissors]?")

        input = input.toUpperCase()
        if (input == "ROCK" || input == "PAPER" || input == "SCISSORS") {
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
        return "ROCK"
    if (choice == 1)
        return "PAPER"
    if (choice == 2)
        return "SCISSORS"
    throw "invalid computer choice generated"
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`)

// keep track of the humanScore after each round
// keep track of the computerScore after each round

// playRound has two parameters (lhs) humanChoice, (rhs) computerChoice and 
// computes the winner based on those choices. at the end of a round a  
// winner announcement is made and the round winner is returned to the caller.
// the possible round winner values are "human", "computer", "no winner". 

//  IF "ROCK" vs. "ROCK" print "no winner." return "no winner"
//  IF "ROCK" vs. "PAPER", print "paper beats rock; computer wins!" return "computer"
//  IF "ROCK" vs. "SCISSORS", print "rock beats scissors human wins!" return "human"

//  IF "PAPER" vs. "PAPER" print "no winner." return "no winner"
//  IF "PAPER" vs. "ROCK", print "paper beats rock; human wins!" return "human"
//  IF "PAPER" vs. "SCISSORS" print "scissors beats paper; computer wins!" return "computer"

//  IF "SCISSORS" vs. "SCISSORS" print "no winner." return "no winner"
//  IF "SCISSORS" vs. "PAPER", print "scissors beats paper; human wins!" return "human"
//  IF "SCISSORS" vs. "ROCK", print "rock beats scissors; computer wins!" return "computer"

// playGame is the game loop and continues to play for 5 overall "winning" rounds by invoking
// playRound and supplying the humanChoice and computerChoice inputs each time. each time
// the round winner is returned from playRound, playGame increments the humanScore or 
// computerScore respectively if there is a winner. If there is no winner in a round, 
// the round is ignored and played again until someone wins for a total of 5 rounds.
// best out of 5 wins the game!


