// Welcome to the game! :D
var battle = window.prompt("Would you like to play against Pikachu? \n [1] - Yes \n [2] - No");

class Pokemon {
    constructor(name, HP, powerMove, damage, potion) {
        this.name = name;
        this.HP = HP;
        this.powerMove = powerMove;
        this.damage = damage;
        this.potion = potion;

        // If player selects a Pokemon, allow greeting for that Pokemon to play

        console.log(`${name} has ${HP} HP, their power move is ${powerMove}, it does ${damage} damage and they have a chance of healing by ${potion}%!`);
    }
    attack(otherPokemon) {
        otherPokemon.HP = otherPokemon.HP - this.damage;
        console.log(`${this.name} attacked ${otherPokemon.name} and did ${this.damage}! ${otherPokemon.name} is now at ${otherPokemon.HP}!`);
    }
}

let myPokemon;

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
                myPokemon = new Pokemon("Charmander", 15, "Ember", 4, 1.5);
            } else if (select === "2") {
                let pokemon = "Bulbasaur";
                console.log("You've selected Bulbasaur!");
                myPokemon = new Pokemon("Bulbasaur", 14, "Vine Whip", 4.5,2);
            } else if (select === "3") {
                let pokemon = "Squirtle";
                console.log("You've selected Squirtle!");
                myPokemon = new Pokemon("Squirtle", 13, "Water Gun", 5, 3);
            }

    } else {
        alert("Have a nice day!");
        console.log("See you later!");
    } break;

}

// Pikachu's HP & Battle Info

Pikachu = new Pokemon("Pikachu", 17, "Thundershock", 5, 2);
myPokemon.attack(Pikachu);

// Battle Sequence

// const battleSequence = [
//     {
//         choice: Charmander,
//         options: ["Fight", "Potion", "Flee"]
//     },
//     {
//         choice: Bulbasaur,
//         options: ["Fight", "Potion", "Flee"]
//     },
//     {
//         choice: Squirtle,
//         options: ["Fight", "Potion", "Flee"]
//     },
//     {
//         opponent: Pikachu,
//         options: ["Fight", "Potion"]
//     }
// ]

// Heal Sequence


// Play Win Sequence

// Play Lose Sequence