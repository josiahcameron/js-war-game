export const cardSuits = ['♥', '♦', '♠', '♣'];
export const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

export function Card ({value, suit}={}){
    this.value = value;
    this.suit = suit;
}
