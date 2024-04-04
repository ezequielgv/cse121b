// Selecting DOM elements.
const sectionSecretName = document.querySelector('#secret-name');
const divLife = document.querySelector('#total-life');
const divScore = document.querySelector('#score');
const divErrorLetters = document.querySelector('#error-letters');
const inputLetter = document.querySelector('#inp-letter');
const btnGuess = document.querySelector('#btn-guess');
const btnReset = document.querySelector('#btn-reset');

// Game variables.
let pokemonName = '';
let revealedName = '';
let errorLetters = [];
let guessedLetters = [];
let totalLife = 7;
let score = 0;
let count = 0;

const fetchData = async () => { // Fetch data from PokeAPI to get a random Pokemon name.
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const { results } = await response.json();
        const randomPokemon = results[Math.floor(Math.random() * results.length)];
        pokemonName = randomPokemon.name;
        revealedName = pokemonName.replace(/[a-zA-Z]/g, '_');
        displaySecretName(revealedName);
    } catch (error) { console.error(error); }
};

function checkLetter() { // Check if the guessed letter is correct.
    const newLetter = inputLetter.value.toLowerCase(); count++;

    if (pokemonName.toLowerCase() === newLetter) {
        score += count === 1 ? 100 : count <= 3 ? 50 : count <= 5 ? 30 : 10; // Award points and reset the game if the user guessed the whole name correctly.
        alert("You guessed it! It's " + pokemonName + "!");
        resetGame();
    } else if (pokemonName.toLowerCase().includes(newLetter)) {
        if (!guessedLetters.includes(newLetter)) { // If the new wrong letter exists, it will not be pushed into the array.
            guessedLetters.push(newLetter);
            // Update the revealed name and score if the guessed letter is correct.
            revealedName = pokemonName.split('').map((char, index) => (char.toLowerCase() === newLetter ? char : revealedName[index])).join('');
            score += 10; printScore();
            displaySecretName(revealedName);
        } else { alert("You already guessed this letter. Try another one!"); }
    } else {
        if (!errorLetters.includes(newLetter)) { // If the new wrong letter exists, it will not be pushed into the array.
            errorLetters.push(newLetter); printErrorLetters();
            loseLife(); // Reduce life if the guessed letter is incorrect.
        } else { alert("You already guessed this letter. Try another one!"); }
    }

    // Check if the whole name is revealed.
    if (!revealedName.includes('_')) { alert("Congratulations! It's " + pokemonName + "!"); score += 25; resetGame(); }

    cleanInput();
}

function loseLife() { // Reduce life and check if the game is over.
    totalLife--;
    score = Math.max(0, score - 5);
    printLifes();
    printScore();

    if (totalLife === 0) {
        score = 0; resetGame();
        divErrorLetters.textContent = ''; // I added this line because, for any reason, I can't clean the list when the user loses the game.
        alert("You lose the game :c. The pokemon was " + pokemonName + ".");
    }
}

function printLifes() { // Display remaining lives as hearts.
    divLife.innerHTML = '';
    const hearts = Array.from({ length: totalLife }, () => {
        const iElement = document.createElement('i');
        iElement.classList.add('fa-solid', 'fa-heart');
        return iElement;
    });
    divLife.append(...hearts);
}

function displaySecretName(name) { sectionSecretName.textContent = name; } // Update the secret name displayed.
function printErrorLetters() { divErrorLetters.textContent = errorLetters.join('-'); } // Display the incorrect letters guessed.
function cleanInput() { inputLetter.value = ''; } // Clean input field.
function printScore() { divScore.textContent = score; } // Display the current score.
function cleanVariables() { totalLife = 7;  count = 0;  errorLetters = [];  guessedLetters = []; divErrorLetters.textContent = ''; } // Reset game variables and update display.

// Event listeners for guess button and reset button.
btnGuess.addEventListener('click', checkLetter);
btnReset.addEventListener('click', () => { score = 0; resetGame(); });

function resetGame() { cleanVariables(); setupGame(); } // Reset the game state.
function setupGame() { fetchData(); printLifes(); printScore(); } // Fetch initial data and set up the game.
document.addEventListener('DOMContentLoaded', setupGame); // Initialize the game when the DOM is loaded.