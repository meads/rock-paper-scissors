console.clear()
console.log(`
####   ###   ###  #   #    ####   ###  ####  ##### ####      ####  ###  ###  ####  ####  ###  ####   #### 
#   # #   # #     #  #     #   # #   # #   # #     #   #    #     #      #  #     #     #   # #   # #     
####  #   # #     ###      ####  ##### ####  ####  ####      ###  #      #   ###   ###  #   # ####   ###  
#  #  #   # #     #  #     #     #   # #     #     #  #         # #      #      #     # #   # #  #      # 
#   #  ###   ###  #   #    #     #   # #     ##### #   #    ####   ###  ### ####  ####   ###  #   # ####  
`)

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

        if (!input) 
            input = ""

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

// playRound has two parameters (lhs) humanChoice, (rhs) computerChoice and 
// computes the winner based on those choices. at the end of a round a  
// winner announcement is made and the round winner is returned to the caller.
// the possible round winner values are "human", "computer", "no winner". 
function playRound(humanChoice, computerChoice) {
    const humanWinner = "human"
    const computerWinner = "computer"
    const noWinner = "no winner"

    //  IF "ROCK" vs. "ROCK" print "no winner." return "no winner"
    if (humanChoice == "ROCK" && computerChoice == "ROCK") {
        console.log("no winner.")
        return noWinner
    }
    //  IF "ROCK" vs. "PAPER", print "paper beats rock; computer wins!" return "computer"
    if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("paper beats rock; computer wins!")
        return computerWinner
    }
    //  IF "ROCK" vs. "SCISSORS", print "rock beats scissors human wins!" return "human"
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("rock beats scissors human wins!")
        return humanWinner
    }
    //  IF "PAPER" vs. "PAPER" print "no winner." return "no winner"
    if (humanChoice == "PAPER" && computerChoice == "PAPER") {
        console.log("no winner.")
        return noWinner
    }
    //  IF "PAPER" vs. "ROCK", print "paper beats rock; human wins!" return "human"
    if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("paper beats rock; human wins!")
        return humanWinner
    }
    //  IF "PAPER" vs. "SCISSORS" print "scissors beats paper; computer wins!" return "computer"
    if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("scissors beats paper; computer wins!")
        return computerWinner
    }
    //  IF "SCISSORS" vs. "SCISSORS" print "no winner." return "no winner"
    if (humanChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        console.log("no winner.")
        return noWinner
    }
    //  IF "SCISSORS" vs. "PAPER", print "scissors beats paper; human wins!" return "human"
    if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("scissors beats paper; human wins!")
        return humanWinner
    }
    //  IF "SCISSORS" vs. "ROCK", print "rock beats scissors; computer wins!" return "computer"
    if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("rock beats scissors; computer wins!")
        return computerWinner
    }
    console.log(`humanChoice: ${humanChoice}, computerChoice: ${computerChoice}`)
    throw "unexpected playRound result"
}

// keep track of the humanScore after each round
let humanScore = 0
// keep track of the computerScore after each round
let computerScore = 0

// store the string choice from the user prompt, values are "ROCK", "PAPER" or "SCISSORS"
let humanChoice = ""
// store the random string choice by the "computer". values are "ROCK", "PAPER" or "SCISSORS"
let computerChoice = ""

// playGame is the game loop and continues to play for 5 overall "winning" rounds by invoking
// playRound and supplying the humanChoice and computerChoice inputs each time. each time
// the round winner is returned from playRound, playGame increments the humanScore or 
// computerScore respectively if there is a winner. If there is no winner in a round, 
// the round is ignored and played again until someone wins for a total of 5 rounds.
// best out of 5 wins the game!
function playGame() {
    let winningRounds = 0
    let roundWinner = ""
    
    while (winningRounds < 5) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        roundWinner = playRound(humanChoice, computerChoice)
        if (roundWinner == "no winner") {
            console.log(`${humanChoice} VS. ${computerChoice}! No winner, go again!`)
            continue;
        }

        if (roundWinner == "human") {
            ++humanScore
        } 
        else if (roundWinner == "computer") {
            ++computerScore
        }
        ++winningRounds
        console.log(`The score is, human: ${humanScore}, computer: ${computerScore}`)
    }

    console.log(`human rounds won: ${humanScore}\ncomputer rounds won: ${computerScore}`)
    if (humanScore > computerScore) {
        console.log("human wins!!!")
    } else if (humanScore < computerScore) {
        console.log("you lost. :/")
    }
}

playGame()
