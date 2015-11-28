////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    /* YOUR CODE HERE */
    // player', 'computer', or 'tie'
    // 'rock' beats 'scissors'
    // 'scissors' beats 'paper'
    // 'paper' beats 'rock'
    if (playerMove === computerMove) {
        winner = 'tie';
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'scissors') {
            winner = 'player'
        }
        else if (computerMove === 'paper') {
            winner = 'computer'
        }
        
    } else if (playerMove === 'scissors') {
        if (computerMove === 'paper') {
            winner = 'player'
        }
        else if (computerMove === 'rock') {
            winner = 'computer'
        }
        
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player'
        }
        else if (computerMove === 'scissors') {
            winner = 'computer'
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 || computerWins <5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log("I select " + playerMove + " and the computer goes with " + computerMove + "!" + "\n");
    
        var winner = getWinner(playerMove, computerMove); 
            if (winner === 'player') {
                playerWins ++;
                console.log("I win this round!");
            }
            else if (winner === 'computer') {
                computerWins ++;
                console.log("Computer wins this round...");
            }
            console.log("The score is, PLAYER: " + playerWins + " & COMPUTER: " + computerWins + "\n");
    }
    return [playerWins, computerWins];
}
playToFive()

