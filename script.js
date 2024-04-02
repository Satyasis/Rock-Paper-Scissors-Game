let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = (userChoice, compChoice) => {
    // console.log("Game was draw");
    message.innerText = `Game was Draw😐. You and computer, chose ${userChoice}. Play again.`
    message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        // console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You win!😊 Your ${userChoice} beats computer's ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        // console.log("You loose!");
        computerScore++;
        computerScorePara.innerText = computerScore;
        message.innerText = `You lost😞. Computer's ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const compChoice = generateCompChoice();
    // console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        } else if(userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true ;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");   // Get user choice
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});