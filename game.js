const humanWeapons = document.querySelectorAll('.humanWeapons');

const reset = document.querySelector('.reset');

// message box
const winMsg = document.querySelector('.middle > h1');
const winInfo = document.querySelector('.bottom > h3');

// rounds
const rounds = document.querySelector('.top > h4');
// console.log(rounds.textContent);
let round = 0;

// choices
const compChoice = document.querySelector('.com > h4');
const humChoice = document.querySelector('.hum > h4')

// score
const compScore = document.querySelector('.compScore > h1');
const humScore = document.querySelector('.humScore > h1');

let humanScore = 0;
let computerScore = 0;

const roshambo = ['rock', 'paper', 'scissors'];


// function getComputerChoice() {
    
    //     let computer = Math.floor(Math.random() * roshambo.length);
    
    //     // console.log('Computer Choice:', roshambo[computer], computer);
    //     // return roshambo[0];
    //     // let weaponChoiceC = roshambo[computer];
    //     // computerWeapons.forEach( c => {
        //     //     if(c.alt === weaponChoiceC){
            //     //         c.src = `img/${weaponChoiceC}-y.svg`;
            //     //     }
            //     // });
            //     return(roshambo[computer]);
            // }
            
            // let computer = getComputerChoice();
            // console.log(computer);


            
humanWeapons.forEach( h => {

    // when hover over the icon, it turn yellow
    h.addEventListener('mouseenter', (e) => {
        h.src = `img/${h.alt}-y.svg`;
    });
    // when hover out the icons turn default
    h.addEventListener('mouseleave', (e) => {
        h.src = `img/${h.alt}.svg`;
    });

    

    h.addEventListener('click', function playRound() {

        // computer selects it's weapon
        let computer = roshambo[Math.floor(Math.random() * roshambo.length)]

        // choose the computer weapon and change it's src to yellow ones and increase 50px height 
        let computerWEAPON = document.querySelector(`#${computer}`);
        computerWEAPON.src = `img/${computer}-y.svg`;
        computerWEAPON.style.height = `${(computerWEAPON.height)+50}px`;

        // after 1 sec it will change back to existing src and restore the height
        setTimeout ( function() {
            computerWEAPON.src = `img/${computer}.svg`;
            computerWEAPON.style.height = `${(computerWEAPON.height)-50}px`;
        }, 800);


        round++;
        rounds.textContent = `ROUND ${round}`
        compChoice.textContent = `${computer}`;
        humChoice.textContent = `${h.alt}`;
        console.log('Human: ', h.alt);
        console.log('Computer: ', computer)


    if ( h.alt === 'paper' && computer === 'rock' ) {
        winMsg.textContent = 'You won!';
        winInfo.textContent = `${h.alt} beats ${computer}`;
       console.log('You won! Paper wraps Rock.');
       humanScore++;
       humScore.textContent = humanScore;
    } else if ( h.alt === 'rock' && computer === 'paper')  {
        winMsg.textContent = 'You lost!';
        winInfo.textContent = `${computer} beats ${h.alt}`;
        console.log('You lost! Paper wraps Rock.');
        computerScore++;
        compScore.textContent = computerScore;
    } else if ( h.alt === 'rock' && computer === 'scissors' ) {
        winMsg.textContent = 'You won!';
        winInfo.textContent = `${h.alt} beats ${computer}`;
        console.log('You won! Rock blunts Scissors.');
        humanScore++;
        humScore.textContent = humanScore;
    } else if ( h.alt === 'scissors' && computer === 'rock' ) {
        winMsg.textContent = 'You lost!';
        winInfo.textContent = `${computer} beats ${h.alt}`;
        console.log('You lost! Rock blunts Scissors.');
        computerScore++;
        compScore.textContent = computerScore;
    } else if ( h.alt === 'scissors' && computer === 'paper' ) {
        winMsg.textContent = 'You won!';
        winInfo.textContent = `${h.alt} beats ${computer}`;
        console.log('You won! Scissors cut Paper.');
        humanScore++;
        humScore.textContent = humanScore;
    } else if ( h.alt === 'paper' && computer === 'scissors') {
        winMsg.textContent = 'You lost!';
        winInfo.textContent = `${computer} beats ${h.alt}`;
        console.log( 'You lost! Scissors cut Paper.');
        computerScore++;
        compScore.textContent = computerScore;
    } else {
        winMsg.textContent = `It's a TIE`;
        winInfo.textContent = `Nobody wins.`;
        console.log('Its a TIE');
    }

    console.log('humanScore', humanScore, ' computerScore', computerScore)
        // once either of the player reaches the score of 5 buttons should be unclickable
        if(humanScore === 5){
            winMsg.textContent = `You won by ${humanScore - computerScore} rounds`;
            winMsg.style.color = '#00FFB7'
            winInfo.textContent = `Let's play again.`;
            // compScore.textContent = 0;
            // humScore.textContent = 0;
            // humanWeapons.forEach( h => {
            //     h.removeEventListener('click', playRound);
            // });           
        }else if(computerScore === 5){
            winMsg.textContent = `You lost by ${computerScore - humanScore} rounds`;
            winMsg.style.color = '#E100FF'
            winInfo.textContent = `Let's play again.`;
            // compScore.textContent = 0;
            // humScore.textContent = 0;
            // humanWeapons.forEach( h => {
            //     h.removeEventListener('click', playRound);
            // });
        }
    });
});


reset.addEventListener('click', function() {
    winMsg.textContent = `Let's Play!`;
    winMsg.style.color = '#FFCC00'
    winInfo.textContent = `You've got to win against AI`;
    humanScore = 0;
    computerScore = 0;
    humScore.textContent = 0;
    compScore.textContent = 0;
    round = 1;
    rounds.textContent = `ROUND ${round}`
    compChoice.textContent = `choice`;
    humChoice.textContent = `choice`;
});








