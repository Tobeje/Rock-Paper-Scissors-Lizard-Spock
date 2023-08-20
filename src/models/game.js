import { Player } from './player.js';

// Define all possible game choices.
export const allChoices = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Represents the game logic for Rock, Paper, Scissors, Lizard, Spock.
 */
export class Game {
    /**
     * Constructs a new game with two players.
     *
     * @param {string} [player1Type="human"] - The type of the first player.
     * @param {string} [player1Name="Player"] - The name of the first player.
     * @param {string} [player2Type="computer"] - The type of the second player.
     * @param {string} [player2Name="Computer"] - The name of the second player.
     */
    constructor(player1Type = "human", player1Name = "Player", player2Type = "computer", player2Name = "Computer") {
        this.player1 = new Player(player1Type, player1Name);
        this.player2 = new Player(player2Type, player2Name);
    }

    /**
     * Determines the winner based on the choices of the two players.
     *
     * @param {string} choice1 - The choice of the first player.
     * @param {string} choice2 - The choice of the second player.
     * @returns {string} - The name of the winner, or "Draw" if the choices are the same.
     */
    determineWinner(choice1, choice2) {
        if (choice1 === choice2) return "Draw";

        // Define the winning scenarios for each choice.
        const winningScenarios = {
            rock: ["scissors", "lizard"],
            paper: ["rock", "spock"],
            scissors: ["paper", "lizard"],
            lizard: ["spock", "paper"],
            spock: ["scissors", "rock"],
        };

        if (winningScenarios[choice1].includes(choice2)) {
            return this.player1.name;
        }
        return this.player2.name;
    }
}
