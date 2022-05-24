// Welcome to the game! :D
var battle = window.prompt("Would you like to play against Pikachu? \n [1] - Yes \n [2] - No");


for (let i = 0; i < 5; i++) {

    let i = 1;

    if (battle === "1") {
        alert("Prepare for battle!");
        console.log("The battle has begun!");

            // Show options for Pokemon
            var select = window.prompt("Select a Pokemon! \n [1] - Charmander \n [2] - Bulbasaur \n [3] - Squirtle");

            // Build Logic

            if (select === "1") {
                let pokemon = "Charmander";
                console.log("You've selected Charmander!");
            } else if (select === "2") {
                let pokemon = "Bulbasaur";
                console.log("You've selected Bulbasaur!");
            } else if (select === "3") {
                let pokemon = "Squirtle";
                console.log("You've selected Squirtle!");
            }

    } else {
        alert("Have a nice day!");
        console.log("See you later!");
    } break;

}

let PikachuHP = 17;
let PikachuAttack = 5;
let PikachuPotion = 2;

let PokemonGreeting = function(Pokemon, HP, powerMove, damage, potion) {
    console.log(`${Pokemon} has ${HP} HP, their power move is ${powerMove}, it does ${damage} damage and they have a chance of healing by ${potion}%!`);
};

// if (pokemon = "Charmander") {
//     console.log(Charmander);
// } else if (pokemon = Bulbasaur) {
//     console.log(Bulbasaur);
// } else (pokemon = Squirtle) {
//     console.log(Squirtle);
// }

let Pikachu = PokemonGreeting("Pikachu", 17, "Thunder Wave", 4, 2);
let Charmander = PokemonGreeting("Charmander", 15, "Ember", 4, 1.5);
let Bulbasaur = PokemonGreeting("Bulbasaur", 14, "Vine Whip", 4.5,2);
let Squirtle = PokemonGreeting("Squirtle", 13, "Water Gun", 5, 3);



const battleSequence = [
    {
        choice: Charmander,
        options: ["Fight", "Potion", "Flee"]
    },
    {
        choice: Bulbasaur,
        options: ["Fight", "Potion", "Flee"]
    },
    {
        choice: Squirtle,
        options: ["Fight", "Potion", "Flee"]
    },
    {
        opponent: Pikachu,
        options: ["Fight", "Potion"]
    }
]

// Play Win Sequence

// Play Lose Sequence