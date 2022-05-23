// Welcome to the game! :D
var battle = window.prompt("Would you like to play against Pikachu? \n [1] - Yes \n [2] - No");

while (battle = true) {

    if (battle == 1) {
        alert("Prepare for battle!");
        console.log("The battle has begun!");
    } else {
        alert("Have a nice day!");
        console.log("See you later!");
    } break;

}

// Show options for Pokemon
var select = window.prompt("Select a Pokemon! \n [1] - Charmander \n [2] - Bulbasaur \n [3] - Squirtle");

// Build Logic

if (select = 1) {
    let pokemon = Charmander;
    console.log("You've selected Charmander!");
} else if (select = 2) {
    let pokemon = Bulbasaur;
    console.log("You've selected Bulbasaur!");
} else if (select = 3) {
    let pokemon = Squirtle;
    console.log("You've selected Squirtle!");
}

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
    }
]

// Play Win Sequence

// Play Lose Sequence