# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.
# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code
# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

from collections import Counter 


class Text:
    def __init__(self, text_string: str):
        self.text_string = text_string
        self.list_string = self.text_string.split()
        self.word_count = Counter(self.list_string)

    def frequency(self, word: str) -> int:
        return self.word_count.get(word, 0)
    
    def most_common_word(self) -> str:
        if not self.word_count:
            return None
        return self.word_count.most_common(1)[0][0]

    def unique_words(self) -> list:
        return [word for word, count in self.word_count.items() if count == 1]

string_example = Text("A good book would sometimes cost as much as a good house.")
print(f"Frequency of 'as': {string_example.frequency('as')}")
print(f"Frequency of 'good': {string_example.frequency('good')}")
print(f"Most common word in text {string_example.most_common_word()}")
print(f"Unique words: {string_example.unique_words()}")


# In Anagram Checker, your get_anagrams function it is not correct to use set. Since set delete all the repeated letters in the words and in result you will get, like, meat = TEAMMATE since TEAMMATE after set will be team. So you need to compare the word with:
# 1. words with the same length
# 2. words with the same letters in this length: sorted(word) is equial

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
# Implement a classmethod that returns a Text instance but with a text file:
#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.
# Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
# Create a class called TextModification that inherits from Text.
# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Instead of creating a child class, you could also implements those methods as static methods in the Text class.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)