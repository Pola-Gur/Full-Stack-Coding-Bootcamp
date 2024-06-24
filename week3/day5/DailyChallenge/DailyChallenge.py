# Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random


class Card:
       
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit

    def __str__(self):
        return f'{self.rank} of {self.suit}'

        
class Deck:
    def __init__(self):
        ranks = [str(n) for n in range(2, 11)] + list('JQKA')
        suits = 'spades diamonds clubs hearts'.split()
        self.cards = [Card(rank, suit) for suit in suits for rank in ranks]

    def shuffle(self):
        return random.shuffle(self.cards)


    def deal(self):
        return self.cards.pop() if self.cards else None
      

if __name__ == "__main__":
    deck = Deck()
    deck.shuffle()

    print("5 random cards:")
    for _ in range(5):
        card = deck.deal()
        if card:
            print(card)
        else:
            print("No more cards to deal.")