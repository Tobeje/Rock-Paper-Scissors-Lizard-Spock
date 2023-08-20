import { allChoices, Game } from './models/game.js';
import { setThemeBasedOnSystemPreference } from './utils/helpers.js';
import { getChoiceSVG } from './utils/choiceToSVG.js';



document.addEventListener('DOMContentLoaded', () => {
    setThemeBasedOnSystemPreference();


    let savedGames = []; // Initialize an array to store saved games
    let currentGame = null; // Variable to keep track of the current game

    const playerLeftElement = document.getElementById("player-left");
    const playerRightElement = document.getElementById("player-right");

    document.addEventListener("click", event => {
        if (event.target.closest(".choice")) {
            handlePlayerVsComputer(event.target.closest(".choice").dataset.choice);
        } else if (event.target.closest("#computer-vs-computer")) {
            handleComputerVsComputer();
        }
    });

    // Handle click event to save the current game result
    document.getElementById("save-result").addEventListener("click", function() {
        if (currentGame) {
            savedGames.push(currentGame);
            displaySavedGames(); // We will implement this next
        }
    });

    // Handle click events to replay a saved game
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("replay-game")) {
            const gameIndex = event.target.dataset.index;
            const game = savedGames[gameIndex];
            updateUI(game.player1Name, game.choice1, game.player2Name, game.choice2);
            displayResult(game.outcome, game.player1Name, game.player2Name);
        }
    });

    /**
     * Saves the current game to the savedGames array.
     * @param player1Name {string}
     * @param choice1 {string}
     * @param player2Name {string}
     * @param choice2 {string}
     * @param outcome {string}
     * @returns {void}
     */
    function saveCurrentGame(player1Name, choice1, player2Name, choice2, outcome) {
        currentGame = {
            player1Name: player1Name,
            choice1: choice1,
            player2Name: player2Name,
            choice2: choice2,
            outcome: outcome
        };
    }

    /**
     * Handles the player vs. computer game.
     * @param playerChoice {string}
     * @returns {void}
     */
    function handlePlayerVsComputer(playerChoice) {
        const game = new Game("human", "Player", "computer", "Computer");

        const computerChoice = game.player2.makeChoice(allChoices);

        updateUI(game.player1.name, playerChoice, game.player2.name, computerChoice);
        const outcome = game.determineWinner(playerChoice, computerChoice);
        displayResult(outcome, game.player1.name, game.player2.name);
        saveCurrentGame(game.player1.name, playerChoice, game.player2.name, computerChoice, outcome);
    }

    /**
     * Handles the computer vs. computer game.
     * @returns {void}
     */
    function handleComputerVsComputer() {
        const game = new Game("computer", "Computer 1", "computer", "Computer 2");
        const computer1Choice = game.player1.makeChoice(allChoices);
        const computer2Choice = game.player2.makeChoice(allChoices);

        updateUI(game.player1.name, computer1Choice, game.player2.name, computer2Choice);
        const outcome = game.determineWinner(computer1Choice, computer2Choice);
        displayResult(outcome, game.player1.name, game.player2.name);
        saveCurrentGame(game.player1.name, computer1Choice, game.player2.name, computer2Choice, outcome);
    }

    /**
     * Updates the UI with the given data.
     * @param player1Name {string}
     * @param choice1 {string}
     * @param player2Name {string}
     * @param choice2 {string}
     * @returns {void}
     */
    function updateUI(player1Name, choice1, player2Name, choice2) {
        playerLeftElement.innerHTML = `<h3>${player1Name}</h3>${getChoiceSVG(choice1)}`;
        playerRightElement.innerHTML = `<h3>${player2Name}</h3>${getChoiceSVG(choice2)}`;
    }

    /**
     * Displays the result of the game.
     * @param winner {string}
     * @param player1Name {string}
     * @param player2Name {string}
     * @returns {void}
     */
    function displayResult(winner, player1Name, player2Name) {
        const resultElement = document.getElementById("game-result");

        if (winner === "Draw") {
            resultElement.innerText = `It's a draw`;
        } else {
            resultElement.innerText = `Winner is ${winner}`;
        }
        document.getElementById("versus").style.display = "block";
    }

    /**
     * Displays the saved games.
     * @returns {void}
     */
    function displaySavedGames() {
        const savedGamesElement = document.getElementById("saved-games");
        savedGamesElement.innerHTML = ""; // Clear the previous list

        savedGames.forEach((game, index) => {
            const gameElement = document.createElement("div");
            gameElement.innerHTML = `
            ${game.player1Name} chose ${game.choice1}, ${game.player2Name} chose ${game.choice2}. Result: ${game.outcome} 
            <button data-index="${index}" class="replay-game btn btn-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"/></svg></button>
        `;
            savedGamesElement.appendChild(gameElement);
        });
    }
});

