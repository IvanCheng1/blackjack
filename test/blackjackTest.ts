const assert = require("assert");
import Blackjack from "../lib/blackjack"

describe("blackjack", () => {
  describe("init test", () => {
    it("get score of 0", () => {
      const blackjack = new Blackjack();

      assert.strictEqual(blackjack.getScore(), 0);
      
    });
  });
});
