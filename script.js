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

// playRound has two parameters (lhs) playerChoice, (rhs) computerChoice and 
// computes the winner based on those choices. at the end of a round a  
// winner announcement is made and the round winner is returned to the caller.
// the possible round winner values are "player", "computer", "no winner". 
function playRound(playerChoice, computerChoice) {
    const playerWinner = "player"
    const computerWinner = "computer"
    const noWinner = "no winner"

    //  IF "ROCK" vs. "ROCK" print "no winner." return "no winner"
    if (playerChoice == "ROCK" && computerChoice == "ROCK") {
        // displayResults("no winner.<br>")
        return noWinner
    }
    //  IF "ROCK" vs. "PAPER", print "paper beats rock; computer wins!" return "computer"
    if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        displayResults("paper beats rock; computer wins!<br>")
        return computerWinner
    }
    //  IF "ROCK" vs. "SCISSORS", print "rock beats scissors player wins!" return "player"
    if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        displayResults("rock beats scissors player wins!<br>")
        return playerWinner
    }
    //  IF "PAPER" vs. "PAPER" print "no winner." return "no winner"
    if (playerChoice == "PAPER" && computerChoice == "PAPER") {
        // displayResults("no winner.<br>")
        return noWinner
    }
    //  IF "PAPER" vs. "ROCK", print "paper beats rock; player wins!" return "player"
    if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        displayResults("paper beats rock; player wins!<br>")
        return playerWinner
    }
    //  IF "PAPER" vs. "SCISSORS" print "scissors beats paper; computer wins!" return "computer"
    if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        displayResults("scissors beats paper; computer wins!<br>")
        return computerWinner
    }
    //  IF "SCISSORS" vs. "SCISSORS" print "no winner." return "no winner"
    if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        // displayResults("no winner.<br>")
        return noWinner
    }
    //  IF "SCISSORS" vs. "PAPER", print "scissors beats paper; player wins!" return "player"
    if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        displayResults("scissors beats paper; player wins!<br>")
        return playerWinner
    }
    //  IF "SCISSORS" vs. "ROCK", print "rock beats scissors; computer wins!" return "computer"
    if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        displayResults("rock beats scissors; computer wins!<br>")
        return computerWinner
    }
    console.log(`playerChoice: ${playerChoice}, computerChoice: ${computerChoice}`)
    throw "unexpected playRound result"
}

// keep track of the playerScore after each round
let playerScore = 0
// keep track of the computerScore after each round
let computerScore = 0

// displayResults is for displaying the outcome of each match between the player and computer
function displayResults(results) {
    const resultsDiv = document.querySelector("#results")
    resultsDiv.innerHTML += results
}

// clearResults clears the contents of the results div when a new game is started.
function clearResults() {
    const resultsDiv = document.querySelector("#results")
    resultsDiv.innerHTML = ""
}

// updateScoreBoard displays the current score between the player and computer
function updateScoreBoard(scoreString) {
    const scoreBoardDiv = document.querySelector("#score-board")
    scoreBoardDiv.textContent = scoreString
}

// playGame is invoked from the game control buttons "Paper", "Rock" or "Scissors" on click.
// the choice is passed in as the playerChoice along with the computer generated choice to 
// the playRound function and the roundWinner is computed. if both the computer and player 
// choose the same item, No winner is the result and we exit the round. otherwise either the 
// computer or the player winds the round and their score is incremented. both scores are 
// displayed in the ui and the rounds continue until either the computer or the player wins
// a total of 5 rounds. after that, game controls are hidden, play again button is displayed
// and scores are zeroed out.
function playGame(playerChoice) {
    const computerChoice = getComputerChoice()
    
    const roundWinner = playRound(playerChoice, computerChoice)
    if (roundWinner == "no winner") {
        displayResults(`${playerChoice} VS. ${computerChoice}! No winner, go again!<br>`)
        return
    }

    if (roundWinner == "player") {
        ++playerScore
    } 
    else if (roundWinner == "computer") {
        ++computerScore
    }

    updateScoreBoard(`Player: ${playerScore}, Computer: ${computerScore}`)

    if (playerScore >= 5 || computerScore >= 5) {
        displayResults(`player rounds won: ${playerScore}\ncomputer rounds won: ${computerScore}<br>`)
        
        if (playerScore > computerScore) {
            displayResults("player wins!!!<br>")
        } 
        else if (playerScore < computerScore) {
            displayResults("you lost. :/<br>")
        }
        
        hideGameControls()
        showPlayAgainButton()
        playerScore = 0
        computerScore = 0
    }
}

function hidePlayAgainButton() {
    const btnPlayAgain = document.querySelector("#play-again")
    btnPlayAgain.style.display = "none"
}

function showPlayAgainButton() {
    const btnPlayAgain = document.querySelector("#play-again")
    btnPlayAgain.style.display = "block"
}

function hideGameControls() {
    const gameControls = document.querySelector("#game-controls")
    gameControls.style.display = "none"
}

function showGameControls() {
    const gameControls = document.querySelector("#game-controls")
    gameControls.style.display = "block"
}

// gameOver clears the results div, updates the scoreboard to its default value 
// hides the play again button and displays the game controls once again.
function gameOver() {
    clearResults()
    updateScoreBoard(`Player: 0, Computer: 0`)
    hidePlayAgainButton()
    showGameControls()
}
