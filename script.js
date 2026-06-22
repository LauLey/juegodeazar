function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===0)
        return ("PIEDRA")
    else if (computerChoice===1)
        return ("PAPEL")
    else if(computerChoice===2)
        return ("TIJERAS")
}

const PIEDRA = document.querySelector(".option_1");
const PAPEL = document.querySelector(".option_2");
const TIJERAS = document.querySelector(".option_3");


    let humanChoice =("")

    PIEDRA.addEventListener("click", () => {
        humanChoice = ("PIEDRA")
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice)
    })

    PAPEL.addEventListener("click", () => {
        humanChoice = ("PAPEL")
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice)
    })

    TIJERAS.addEventListener("click", () => {
        humanChoice = ("TIJERAS")
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice)
    })

function endGame() {
    PIEDRA.disabled = ((humanScore===5)||(computerScore===5));
    PAPEL.disabled = ((humanScore===5)||(computerScore===5));
    TIJERAS.disabled = ((humanScore===5)||(computerScore===5));
    
    if (humanScore>computerScore)
        winner.textContent ="Has ganado!";
        else if (humanScore<computerScore)
        winner.textContent ="Yo gané!";
}

let humanScore = 0
let computerScore = 0
const computer_election = document.querySelector(".computer_election");
const div = document.createElement("div");
const computer_score = document.querySelector(".computer_score");
const human_score = document.querySelector(".human_score");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const winner = document.querySelector(".winner");
computer_score.appendChild(p1);
human_score.appendChild(p2);
computer_election.appendChild(div);

function playRound (humanChoice,computerChoice) {

    if (humanChoice===computerChoice) {
        div.textContent = "Lo mismo, empate";
    }

    else if ((humanChoice==="PIEDRA")&&(computerChoice==="TIJERAS"))
        {div.textContent = "Tijeras, tu ganas";
        humanScore = humanScore + 1;}
        
    else if ((humanChoice==="PAPEL")&&(computerChoice==="PIEDRA"))
        {div.textContent = "Piedra, me ganaste";
            humanScore = humanScore + 1;}

    else if((humanChoice==="TIJERAS")&&(computerChoice==="PAPEL"))
        {div.textContent = "Tu ganas, yo puse papel";
        humanScore = humanScore + 1;}

    else if ((humanChoice==="TIJERAS")&&(computerChoice==="PIEDRA"))
        {div.textContent = "Piedra.Gané!";
        computerScore = computerScore + 1;}

    else if((humanChoice==="PIEDRA")&&(computerChoice==="PAPEL"))
        {div.textContent = "Papel.Gané!";
        computerScore = computerScore + 1;}

    else if((humanChoice==="PAPEL")&&(computerChoice==="TIJERAS"))
        {div.textContent = "Tijeras.Gané!";
        computerScore = computerScore + 1;}

        
        p1.textContent = computerScore;
        p2.textContent = humanScore;

    if ((humanScore===5)||(computerScore===5)){
            endGame ();
    }
    }


const start = document.querySelector(".start");

start.addEventListener ("click", () => {
    humanScore = 0;
    computerScore = 0;
    div.textContent = "¿PIEDRA, PAPEL O TIJERA?";
    p1.textContent = computerScore;
    p2.textContent = humanScore;
    winner.textContent = "El ganador es:";
    PIEDRA.disabled = ((humanScore===5)||(computerScore===5));
    PAPEL.disabled = ((humanScore===5)||(computerScore===5));
    TIJERAS.disabled = ((humanScore===5)||(computerScore===5));
})