//write your code here
const game = (userChoise) => {
    const userOption = userChoise;
    const choises = ["rock", "paper", "scissors", "lizard", "spock"];


    const randomIndex = Math.floor(Math.random() * choises.length);
    const computerOption = choises[randomIndex];


    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["scissors", "rock"]
    };


    if (userOption === computerOption) {
        return `User choice: ${userOption}, Sheldon choice: ${computerOption} -> It's a tie! (Sheldon thinks you cheated)`;
    }

    if (rules[userOption].includes(computerOption)) {
        return `User choice: ${userOption}, Sheldon choice: ${computerOption} -> You win! (Sheldon cry and thinks you cheated)`;
    }

    return `User choice: ${userOption}, Sheldon choice: ${computerOption} -> Sheldon wins, Bazinga!`;
};

console.log(game("spock"));