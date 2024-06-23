# Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.
# The requirements are as follows:
# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.


class Card:
    
    def __init__(self):
        self.ranks = [str(n) for n in range(2, 11)] + list('JQKA')
        self.suits = 'spades diamonds clubs hearts'.split()


class Deck:
    def __init__(self):
        self.cards = [Card(rank, suit) for suit in suits for rank in ranks]

    def shuffle():


    def deal():
        