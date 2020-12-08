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
  usedCards: Card[];

  constructor() {
    this.score = 0;
    this.dealer = [];
    this.player = [];
    this.usedCards = [];
  }

  generateCard(): Card {
    let numberIndex = Math.floor(Math.random() * 13);
    let suitIndex = Math.floor(Math.random() * 4);

    const card: Card = {
      number: cardNumbers[numberIndex],
      suit: suits[suitIndex],
    };

    if (this.usedCards.includes(card)) {
      return this.generateCard();
    }

    this.usedCards.push(card);
    return card;
  }

  shuffleDeck(): void {
    this.usedCards = [];
  }

  dealPlayer(cards?: Card[]) {
    if (cards) {
      this.player = cards;
    } else {
      this.player.push(this.generateCard());
      this.player.push(this.generateCard());
    }
  }

  dealDealer(cards?: Card[]) {
    if (cards) {
      this.dealer = cards;
    } else {
      this.dealer.push(this.generateCard());
      this.dealer.push(this.generateCard());
    }
  }

  getScore(): number {
    return this.score;
  }
}
