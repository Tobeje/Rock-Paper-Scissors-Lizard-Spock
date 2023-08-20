/**
 * Represents a player, which can be of type 'human' or 'computer'.
 */
export class Player {

    /**
     * Constructs a new player.
     *
     * @param {string} [type="human"] - The type of the player (e.g., "human").
     * @param {string} [name="Player"] - The name of the player.
     */
    constructor(type = "human", name = "Player") {
        this.type = type;
        this.name = name;
    }

    /**
     * Makes a choice for the player. If the player is human, an error is thrown
     * indicating that the human player needs to manually select a choice.
     * Otherwise, a random choice is selected for non-human players.
     *
     * @param {Array} choices - An array of possible choices.
     * @returns {string} - The chosen item from the choices array.
     * @throws {Error} - If the player type is "human".
     */
    makeChoice(choices) {
        if (this.type === "human") {
            throw new Error("Human player needs to select a choice");
        }
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
}