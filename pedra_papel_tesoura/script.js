// Computer Logic

const getComputerChoice = () =>{
    return Math.round(Math.random() * (3 - 1) + 1)
}
console.log(getComputerChoice())