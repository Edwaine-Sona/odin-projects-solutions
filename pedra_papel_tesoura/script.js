// Human Logic

const getHumanChoice = (choice) =>{
    choice = prompt("Digite a sua escolha: Pedra, Papel ou Tesoura?")

    return choice
}
console.log(getHumanChoice())

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
console.log(getComputerChoice())