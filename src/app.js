//write your code here
const juego = (userChoise) => {
    const opcionUsuario = userChoise;
    const choises = ["rock", "paper", "scissors", "lizard", "spock"];
    
    
    const randomIndex = Math.floor(Math.random() * choises.length);
    const opcionComputadora = choises[randomIndex];


    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["scissors", "rock"]
    };


    if (opcionUsuario === opcionComputadora) {
        return `User choice: ${opcionUsuario}, Sheldon choice: ${opcionComputadora} -> It's a tie! (Sheldon thinks you cheated)`;
    }

    if (rules[opcionUsuario].includes(opcionComputadora)) {
        return `User choice: ${opcionUsuario}, Sheldon choice: ${opcionComputadora} -> You win! (Sheldon cry and thinks you cheated)`;
    }

    return `User choice: ${opcionUsuario}, Sheldon choice: ${opcionComputadora} -> Sheldon wins, Bazinga!`;
};

console.log(juego("paper"));