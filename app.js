let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const smallUser = "user".fontsize(3).sub();
const smallComp = "comp".fontsize(3).sub();
const gorila = String.fromCodePoint(0x1F98D);
const monkey = String.fromCodePoint(0x1F412);
const snail = String.fromCodePoint(0x1F40C);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function fixLetter(noun) {
    if (noun === "rock") return "Rock";
    if (noun === "paper") return "Paper";
    if (noun === "scissors") return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${fixLetter(userChoice)}${smallUser} beats ${fixLetter(compChoice)}${smallComp}. You win! Your parents are so proud! ${monkey}`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${fixLetter(userChoice)}${smallUser} loses to ${fixLetter(compChoice)}${smallComp}. You lose. Go cry to your mom! ${gorila}`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}

function tie(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${fixLetter(userChoice)}${smallUser} ties with ${fixLetter(compChoice)}${smallComp}. Nothing happens. It's a tie! ${snail}`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 500);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            tie(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}


main();