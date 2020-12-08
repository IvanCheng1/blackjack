const assert = require("assert");
import Blackjack, { Card } from "../lib/blackjack";

describe("blackjack tests", () => {
  describe("init test", () => {
    it("get score of 0", () => {
      const blackjack = new Blackjack();
      assert.strictEqual(blackjack.getScore(), 0);
    });
  });

  describe("test dealing player 2 cards", () => {
    it("number of cards should be 2", () => {
      const blackjack = new Blackjack();
      blackjack.initialiseGame();
      assert.strictEqual(blackjack.player.length, 2);
    });
    it("force deal player with specific cards", () => {
      const blackjack = new Blackjack();
      const cards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];
      blackjack.initialiseGame(cards);
      assert.deepStrictEqual(blackjack.player, cards);
    });
    it("force deal player with specific cards and check hand score", () => {
      const blackjack = new Blackjack();
      const cards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];
      blackjack.initialiseGame(cards);
      const card: Card = {
        number: "J",
        suit: "Hearts",
      };
      blackjack.dealPlayer(card);
      assert.deepStrictEqual(blackjack.isPlayerBust(), true);
    });
    it("force deal player with specific cards and check number of used cards is 2", () => {
      const blackjack = new Blackjack();
      const cards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];
      blackjack.initialiseGame(cards);
      blackjack.printPlayerCards()
      assert.deepStrictEqual(blackjack.usedCards.length, 4);
    });
  });
});
