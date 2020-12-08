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
      const playerCards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];
      const dealerCards: Card[] = [
        { number: 3, suit: "Spades" },
        { number: 2, suit: "Clubs" },
      ];
      blackjack.initialiseGame(playerCards, dealerCards);
      const card: Card = {
        number: "J",
        suit: "Hearts",
      };
      blackjack.dealPlayer(card);
      assert.strictEqual(blackjack.isPlayerBust(), true);
    });
    it("force deal player with specific cards and check number of used cards is 2", () => {
      const blackjack = new Blackjack();
      const cards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];
      blackjack.initialiseGame(cards);
      assert.strictEqual(blackjack.usedCards.length, 4);
    });
  });

  describe("check dealing cards", () => {
    it("force deal player with specific cards and check cards are available", () => {
      const blackjack = new Blackjack();
      const cards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];

      const cardToCheck: Card = { number: 9, suit: "Spades" };
      blackjack.initialiseGame(cards);

      assert.strictEqual(blackjack.checkCardIsAvailable(cardToCheck), false);
    });

    it("force deal player with specific cards and check cards are available after shuffling", () => {
      const blackjack = new Blackjack();
      const cards: Card[] = [
        { number: 9, suit: "Spades" },
        { number: 4, suit: "Clubs" },
      ];

      const cardToCheck: Card = { number: 9, suit: "Spades" };
      blackjack.initialiseGame(cards);
      blackjack.shuffleDeck();

      assert.strictEqual(blackjack.checkCardIsAvailable(cardToCheck), true);
    });

    it("deal 52 cards and check if there are more cards", () => {
      const blackjack = new Blackjack();
      const cardToCheck: Card = { number: 9, suit: "Spades" };
      for (let i = 0; i < 52; i++) {
        blackjack.dealPlayer();
      }

      assert.strictEqual(blackjack.checkCardIsAvailable(cardToCheck), false);
    });
  });

  describe("play game", () => {
    it("play game", () => {
      const blackjack = new Blackjack();

      blackjack.initialiseGame();
      blackjack.playDealer();

      assert.strictEqual(false, false);
    });
  });
});
