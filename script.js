function getComputerChoice () {
    let ComputerChoice = Math.floor(Math.random()*3)
    if (ComputerChoice===0)
        return ("PIEDRA")
    else if (ComputerChoice===1)
        return ("PAPEL")
    else if (ComputerChoice===2)
    return ("TIJERA")
}

function getHumanChoice () {
   let HumanChoice = prompt("¿PIEDRA, PAPEL O TIJERA?")
   return HumanChoice.toUpperCase()

}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice,computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
function playGame () {

}

console.log(getComputerChoice())
