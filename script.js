function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===0)
        return ("PIEDRA")
    else if (computerChoice===1)
        return ("PAPEL")
    else if(computerChoice===2)
        return ("TIJERAS")
}

function getHumanChoice () {
    const PIEDRA = document.querySelector(".option_1");
    const PAPEL = document.querySelector(".option_2");
    const TIJERAS = document.querySelector(".option_3");

    let humanChoice =("")

    PIEDRA.addEventListener("click", () => {
        humanChoice = ("PIEDRA")
    })

    PAPEL.addEventListener("click", () => {
        humanChoice = ("PAPEL")
    })

    TIJERAS.addEventListener("click", () => {
        humanChoice = ("TIJERAS")
    })

}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice,computerChoice) {
    if (humanChoice===computerChoice)
        console.log("Lo mismo, empate")
    else if ((humanChoice==="PIEDRA")&&(computerChoice==="TIJERAS"))
        {console.log("Tijeras, tu ganas")
        humanScore = humanScore + 1;}
    else if ((humanChoice==="PAPEL")&&(computerChoice==="PIEDRA"))
        {console.log("Piedra, me ganaste")
            humanScore = humanScore + 1;}
    else if((humanChoice==="TIJERAS")&&(computerChoice==="PAPEL"))
        {console.log("Tu ganas, yo puse papel")
        humanScore = humanScore + 1;}
    else if ((humanChoice==="TIJERAS")&&(computerChoice==="PIEDRA"))
        {console.log("Piedra.Gané!")
        computerScore = computerScore + 1;}
    else if((humanChoice==="PIEDRA")&&(computerChoice==="PAPEL"))
        {console.log("Papel.Gané!")
        computerScore = computerScore + 1;}
    else if((humanChoice==="PAPEL")&&(computerChoice==="TIJERAS"))
        {console.log("Tijeras.Gané!")
        computerScore = computerScore + 1;}
}

function gameRound () {
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice)
}

function playGame () {

    if (humanScore>computerScore)
        console.log("Has ganado!")
    else if (humanScore<computerScore)
        console.log("Yo gané!")
    else if (humanScore===computerScore)
        console.log("Empatamos")
}

const start = document.querySelector(".start");

start.addEventListener("click", () => gameRound());