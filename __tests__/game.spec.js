// tests/game.test.js
import { Game } from '../src/models/game.js';

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = new Game();
    });

    test('determineWinner returns draw for identical choices', () => {
        expect(game.determineWinner('rock', 'rock')).toBe('Draw');
        expect(game.determineWinner('paper', 'paper')).toBe('Draw');
        expect(game.determineWinner('scissors', 'scissors')).toBe('Draw');
    });

    test('determineWinner returns the correct winner', () => {
        expect(game.determineWinner('rock', 'scissors')).toBe('Player');
        expect(game.determineWinner('scissors', 'rock')).toBe('Computer');
        expect(game.determineWinner('scissors', 'paper')).toBe('Player');
        expect(game.determineWinner('paper', 'rock')).toBe('Player');
        expect(game.determineWinner('rock', 'paper')).toBe('Computer');
        expect(game.determineWinner('paper', 'scissors')).toBe('Computer');
        expect(game.determineWinner('scissors', 'paper')).toBe('Player');
    });
});