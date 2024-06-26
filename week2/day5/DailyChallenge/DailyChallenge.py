# Challenge 1 : Sorting
# Instructions
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:

# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

words = [word for word in input().split(",")]
print(",".join(sorted(words)))

# bellow faster code without list comprehension
words = input().split(",")
print(",".join(sorted(words)))


# Challenge 2 : Longest Word
# Instructions
# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples
# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") ➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

sentence = input().split(" ")
letters = 0
for word in sentence:
    if len(word) > letters:
        longest_word = word
        letters = len(longest_word)
print(longest_word)