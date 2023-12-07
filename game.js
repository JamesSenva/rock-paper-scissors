// console.log('Hello world!');

const roshambo = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    
    let computer = Math.floor(Math.random() * roshambo.length);

    console.log('Computer Choice:', roshambo[computer]);
    return(roshambo[computer]);
}



function getHumanChoice() {

    let humanChoice;

    humanChoice = prompt('Rock, Paper, Scissors..Choose your weapon wisely against AI.').toLowerCase();

    while( !roshambo.includes(humanChoice) ) {
        humanChoice = prompt('Try again, pick from Rock, Paper or Scissors only.').toLowerCase();
    }

    console.log('Your Choice:', humanChoice);
    return(humanChoice);
}



function playRound(human, computer) {
    if ( human === 'paper' && computer === 'rock' ) {
       console.log('You won! Paper wraps Rock.');
       humanScore++;
    } else if ( human === 'rock' && computer === 'paper')  {
        console.log('You lost! Paper wraps Rock.');
        computerScore++;
    } else if ( human === 'rock' && computer === 'scissors' ) {
        console.log('You won! Rock blunts Scissors.');
        humanScore++;
    } else if ( human === 'scissors' && computer === 'rock' ) {
        console.log('You lost! Rock blunts Scissors.');
        computerScore++;
    } else if ( human === 'scissors' && computer === 'paper' ) {
        console.log('You won! Scissors cut Paper.');
        humanScore++;
    } else if ( human === 'paper' && computer === 'scissors') {
        console.log( 'You lost! Scissors cut Paper.');
        computerScore++;
    } else {
        console.log('Its a TIE');
    }
}



let humanScore = 0;
let computerScore = 0;


function game(){

    for (let i = 1; i <= 5; i++){
        const human = getHumanChoice();
        const computer = getComputerChoice();
        playRound(human, computer);
        console.log('Your Score:', humanScore);
        console.log('Computer Score:', computerScore);
        console.log('------------------------------------');
    }
    if (humanScore > computerScore) {
        console.log(`You won the match by ${humanScore} innings.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the match by ${computerScore} innings.`)
    } else {
        console.log('Its a tie!');
    }
    
}

game();






