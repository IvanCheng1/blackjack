type CardNumber = "A" | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "J" | "Q" | "K";
type Suit = "Spades" | "Hearts" | "Clubs" | "Diamonds";

const cardNumbers: CardNumber[] = [
  "A",
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "J",
  "Q",
  "K",
];
const suits: Suit[] = ["Spades", "Hearts", "Clubs", "Diamonds"];

export interface Card {
  number: CardNumber;
  suit: Suit;
}

export default class Blackjack {
  score: number;
  dealer: Card[];
  player: Card[];

  constructor() {
    this.score = 0;
    this.dealer = [];
    this.player = [];
  }

  getScore() {
    return this.score;
  }
}
