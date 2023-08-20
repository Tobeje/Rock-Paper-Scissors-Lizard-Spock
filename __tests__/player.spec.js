// tests/player.test.js
import { Player } from '../src/models/player.js';

describe('Player', () => {
    let player, computer;

    beforeEach(() => {
        player = new Player();
        computer = new Player('computer');
    });

    test('human player type is set correctly', () => {
        expect(player.type).toBe('human');
    });

    test('computer player type is set correctly', () => {
        expect(computer.type).toBe('computer');
    });

    test('human player throws error when making choice', () => {
        expect(() => {
            player.makeChoice(['rock', 'paper', 'scissors']);
        }).toThrow('Human player needs to select a choice');
    });

    test('computer player makes a choice from given options', () => {
        const choices = ['rock', 'paper', 'scissors'];
        const choice = computer.makeChoice(choices);
        expect(choices).toContain(choice);
    });
});
