// Human Logic

const getHumanChoice = (choice) =>{
    choice = prompt("Digite a sua escolha: Pedra, Papel ou Tesoura?").toLowerCase()

    return choice
}

// Computer Logic

const getComputerChoice = (choice) =>{
    choice = Math.round(Math.random() * (3 - 1) + 1)
    if (choice === 1) {
        return choice = "pedra"
    }
    else if (choice === 2) {
        return choice = "tesoura"
    }
    else{
        return choice = "papel"
    }
}

//Playround

let humanScore = 0
let computerScore = 0

const playround = (humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) =>{

    if (humanChoice === computerChoice) {
        return alert("Empate!")
    } else {
        if (humanChoice === "pedra") {
            if (computerChoice === "papel") {
                computerScore++
                return alert("Você venceu!")
            } else {
                humanScore++
                return alert("Você venceu!")
            }
        } else {
            if (humanChoice === "papel") {
                if (computerChoice === "pedra") {
                    humanScore++
                    return alert("Você venceu!")
                } else {
                    computerScore++
                    return alert("O Computador vence!")
                }
            } else {
                if (humanChoice === "tesoura") {
                    if (computerChoice === "papel") {
                        humanScore++
                        return alert("Você venceu!")
                    } else {
                        computerScore++
                        return alert("O Computador vence!")
                    }
                }
            }
        }
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playround(humanSelection, computerSelection)

console.log("Computador: " + computerSelection)
console.log("Usuário: " + humanSelection)
console.log("Pontuação: Computador= " + computerScore + " || Usuário= " + humanScore)