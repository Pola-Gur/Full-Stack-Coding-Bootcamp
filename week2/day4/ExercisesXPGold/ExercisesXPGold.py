# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.
# Some Hints

# Ask for the user’s gender as “m” or “f”.
# Ask for the user’s date of birth in the form of “yyyy/mm/dd”, eg. “1993/09/21”.
# Call can_retire to get a definite value for whether the person can or can’t retire.
# Display a message informing the user whether they can retire or not.
# As always, test your code to ensure it works.

from datetime import datetime
import re

current_month = datetime.now().month
current_year = datetime.now().year
option = ["m", "f"]
pattern = r'\d\d\d\d\/\d\d\/\d\d'
dated_pattern = re.compile(pattern)


def get_age(year: str, month: str, day):
    years = current_year - int(year)
    months = current_month - int(month)
    if months < 0:
        years -= 1
    return years


def can_retire(gender, years):
    return (gender == "m" and years >= 67) or (gender == "f" and years >= 62)


def get_gender():
    try:
        gender = input("What is your gender (“m” or “f”?)\n")
        if gender not in option:
            raise Exception("Wrong gender")
        return gender
    except Exception as e:
        print("Failer. ", e)
        return get_gender()


def get_date():
    try:
        date_of_birth = input("What is your date of birth? (format: “yyyy/mm/dd”, eg. “1993/09/21”)\n")
        if re.match(dated_pattern, date_of_birth):
            return date_of_birth    
        else:
            raise Exception("Wrong date format")
    except Exception as e:
        print("Failer. ", e)
        return get_date()


gender = get_gender()
date_of_birth = get_date()
user_birthday = date_of_birth.split("/")
user_year, user_month, user_day = user_birthday
years = get_age(user_year, user_month, user_day)

if can_retire(gender, years):
    print("You can retire")
else:
    print(f"You only {years} years old, you can't retire")



# Exercise 2 : Sum
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful


def number_sec(number):
    result = number + "+" + number + number + "+" + number + number + number + "+" + number + number + number + number
    return print(result)


number_sec(str(input("Yor number\n")))

# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.

# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# For example:

# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)

# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.


from random import randint


def throw_dice():
    num = randint(1, 6)
    return num


def throw_until_doubles():
    num1 = throw_dice()
    num2 = throw_dice()
    attempt = 1
    if num1 != num2:
        num2 = throw_dice()
        attempt += 1
    return attempt


collection = []


def main():
    for i in range (100):
        collection.append(throw_until_doubles())       
    return collection


main()


print("\nIt took in total to reach 100 doubles ", sum(collection))
print("The average is ", round((sum(collection)/len(collection)),2))