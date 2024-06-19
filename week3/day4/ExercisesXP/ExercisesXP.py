# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.
# Hint : The generated sentences do not have to make sense.
# Download this word list
# Save it in your development directory.
# Create a function called get_words_from_file. This function should read the file’s content and return the words as a collection. What is the correct data type to store the words?
# Create another function called get_random_sentence which takes a single parameter called length. The length parameter will be used to determine how many words the sentence should have. The function should:
# use the words list to get your random words.
# the amount of words should be the value of the length parameter.
# Take the random words and create a sentence (using a python method), the sentence should be lower case.
# Create a function called main which will:
# Print a message explaining what the program does.
# Ask the user how long they want the sentence to be. Acceptable values are: an integer between 2 and 20. Validate your data and test your validation!
# If the user inputs incorrect data, print an error message and end the program.
# If the user inputs correct data, run your code.

from random import choice

def get_words_from_file():
    with open("ExercisesXP/words.txt") as file:
        words = file.read().split()
    return words

random_list_for_string = []

def get_random_sentence(words, length):
    random_words = [choice(words).lower() for _ in range(length)]
    sentence = ' '.join(random_words)
    return sentence

def main():
    print("This program take your number (2 - 20) as a length and from file with list of words create a sentence with your length")
    
    length = int(input("How long you want the sentence to be?\n"))
    if length > 20 or length < 2:
        raise ValueError ("Length should be an integer between 2 and 20")


    words = get_words_from_file()
    sentence = get_random_sentence(words, length)
    print(f"Your sentence is: \n{sentence}")


if __name__ == "__main__":
    main()


# 🌟 Exercise 2: Working With JSON
# Instructions
# import json
# sampleJson = """{ 
#    "company":{ 
#       "employee":{ 
#          "name":"emma",
#          "payable":{ 
#             "salary":7000,
#             "bonus":800
#          }
#       }
#    }
# }"""
# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.
