const assert = require("assert");
import Blackjack from "../lib/blackjack";

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
      blackjack.dealPlayer()
      console.log(blackjack.player)
      assert.strictEqual(blackjack.player.length, 2);
    });
  });

});
