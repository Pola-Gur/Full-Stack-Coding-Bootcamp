# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

def display_message():
    print("We are studing how to be a full stack developer")
display_message()

# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called title.
# The function should print a message, such as "One of my favorite books is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument when calling the function.

def favorite_book(title):
    print("One of my favorite books is "+title)
favorite_book("The Devil wears Prada")

# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.


def describe_city(city, country="Europe's country"):
    print(city+" is in "+country)


describe_city("NY")

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.


from random import randint, uniform

def random_number(number):
    another_number = randint(1, 100)
    if number == another_number:
        print("success!")
    else:
        print(f"Fail. Your number is {number}, random number is {another_number}")


number = input('\nGive me number\t')
random_number(number)



# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
# Call the function, in order to make a large shirt with the default message
# Make medium shirt with the default message
# Make a shirt of any size with a different message.

def make_shirt(size="large", text="I love Python"):
    print("The size of the shirt is "+size+" and the text is "+text)


make_shirt()
make_shirt("medium")
make_shirt("small", "a different message")


# Bonus: Call the function make_shirt() using keyword arguments.

make_shirt("large", "I love Python")


# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magican_names):
        print(*magican_names, sep="\n")


def make_great(magician_names):
    for i in range(len(magician_names)):
        magician_names[i] = "the Great "+magician_names[i]


make_great(magician_names)
show_magicians(magician_names)


# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

def get_random_temp():
    return randint(-10, 40)


# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”


# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40


def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp <=16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temp < 23:
        print("It's almost good weather")
    elif 23 <= temp <= 32:
        print("You are lucky! It is a great weather!")
    else:
        print("It's really hot outside")
main()



# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().


def another_random_temp(season):
    if season == "winter":
        return uniform(-10.0,5.0)
    elif season == "summer":
        return uniform(29.0, 40.0)
    else:
        return uniform(6.0, 28.0)

def another_main():
    season = input("\nWhat season is it now? Chose winter, summer, fall or spring\n")

    temp = another_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 < temp < 23:
        print("It's almost good weather")
    elif 23 <= temp <= 32:
        print("You are lucky! It is a great weather!")
    else:
        print("It's really hot outside")
another_main()



# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

another_season = input("\nEnter number of the month\n")  # how to make the last bonus (I don’t want to spoil the previous solution), just for clarity
if  3<= int(another_season) <= 5:
    print("It is spring!")  # or for previous code season = "spring"
if  6<= int(another_season) <= 8:
    print("It is summer!")
if  9<= int(another_season) <= 11:
    print("It is fall!")
if  1<= int(another_season) <= 2 or another_season == 1:
    print("It is winter!")


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.


correct = 0
wrong_answers = []

def star_wars_quiz(data):
    for i in range(len(data)):
        print(data[i]["question"])
        user_answer = input()
        if user_answer == data[i]["answer"]:
            global correct
            correct += 1
        else:
            wrong_answers.append({data[i]["question"]: ["your answer: "+user_answer, "correct answer: "+data[i]["answer"]]})

star_wars_quiz(data)

def results(correct):
    print(f"\nYou have {correct} correct answers and {len(data)-correct} incorrecr answers")
    print(*wrong_answers, sep="\n")


results(correct)
