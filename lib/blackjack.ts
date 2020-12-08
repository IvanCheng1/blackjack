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

const scoreMap = {
  A: 11,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 10,
  Q: 10,
  K: 10,
};

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

    if (this.checkCardIsAvailable(card)) {
      this.addCardToUsed(card);
      return card;
    }

    return this.generateCard();
  }

  addCardToUsed(card: Card): void {
    this.usedCards.push(card);
  }

  checkCardIsAvailable(card: Card): boolean {
    if (this.usedCards.includes(card)) return false;
    return true;
  }

  shuffleDeck(): void {
    this.usedCards = [];
  }

  dealPlayer(card?: Card) {
    if (card) {
      this.player.push(card);
      this.addCardToUsed(card);
    } else {
      this.player.push(this.generateCard());
    }
  }

  dealDealer(card?: Card) {
    if (card) {
      this.dealer.push(card);
      this.addCardToUsed(card);
    } else {
      this.dealer.push(this.generateCard());
    }
  }

  initPlayer(cards?: Card[]): void {
    if (cards) {
      cards.forEach((c) => {
        this.dealPlayer(c);
      });
    } else {
      this.dealPlayer();
      this.dealPlayer();
    }
  }

  initDealer(cards?: Card[]): void {
    if (cards) {
      cards.forEach((c) => {
        this.dealDealer(c);
      });
    } else {
      this.dealDealer();
      this.dealDealer();
    }
  }

  initialiseGame(playerCards?: Card[], dealerCards?: Card[]) {
    this.initPlayer(playerCards);
    this.initDealer(dealerCards);
  }

  isBust(cards: Card[]): boolean {
    let score = this.sumCards(cards);

    if (score > 21) return true;
    return false;
  }

  isPlayerBust(): boolean {
    return this.isBust(this.player);
  }

  isDealerBust(): boolean {
    return this.isBust(this.dealer);
  }

  sumCards(cards: Card[]): number {
    let sum = 0;
    let aExist = false;
    cards.forEach((c) => {
      if (c.number === "A") aExist = true;
      sum += scoreMap[c.number];
    });

    if (sum > 21 && aExist) {
      return sum - 11;
    }

    return sum;
  }

  getScore(): number {
    return this.score;
  }
}
