let playerScore = 0;
let computerScore = 0;

let paper = document.querySelector('#paper');
let rock = document.querySelector('#rock');
let scissors = document.querySelector('#scissors');
let results = document.querySelector('#results');
let playersScore = document.querySelector('#playersScore');
let computersScore = document.querySelector('#computersScore');

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber <= 33) {
        return "rock"
    } else if (randomNumber <= 66) {
        return "paper"
    } else if (randomNumber <= 99) {
        return "scissors"
    } else {
        getComputerChoice()
    }
};

function playRound(playerSelection) {

    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        results.textContent = 'TIE. Play another round.'
    } else if (playerSelection === "rock" && computerSelection === "paper"
        || playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        results.textContent = `Computer wins - ${computerSelection} beats ${playerSelection}`;
        computersScore.textContent = `Computer's score: ${computerScore}`;
    } else if (playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        results.textContent = `You win - ${playerSelection} beats ${computerSelection}`;
        playersScore.textContent = `Your score: ${playerScore}`;
    }

    if (playerScore === 5 && computerScore < 5) {
        alert('YOU WIN');
        playerScore = 0;
        computerScore = 0;
        paper.style.backgroundColor = '';
        rock.style.backgroundColor = '';
        scissors.style.backgroundColor = '';
        results.textContent = 'To start a new game - select your move';
        playersScore.textContent = `Your score: 0`;
        computersScore.textContent = "Computer's score: 0";
    } else if (computerScore === 5 && playerScore < 5) {
        alert('COMPUTER WINS');
        playerScore = 0;
        computerScore = 0;
        paper.style.backgroundColor = '';
        rock.style.backgroundColor = '';
        scissors.style.backgroundColor = '';
        results.textContent = 'To start a new game - select your move';
        playersScore.textContent = 'Your score: 0';
        computersScore.textContent = "Computer's score: 0";
    };
};

paper.addEventListener('click', () => {
    playRound('paper');
    paper.style.backgroundColor = 'green';
    rock.style.backgroundColor = '';
    scissors.style.backgroundColor = '';
});

rock.addEventListener('click', () => {
    playRound('rock');
    rock.style.backgroundColor = 'green';
    paper.style.backgroundColor = '';
    scissors.style.backgroundColor = '';
});

scissors.addEventListener('click', () => {
    playRound('scissors');
    scissors.style.backgroundColor = 'green';
    rock.style.backgroundColor = '';
    paper.style.backgroundColor = '';
});