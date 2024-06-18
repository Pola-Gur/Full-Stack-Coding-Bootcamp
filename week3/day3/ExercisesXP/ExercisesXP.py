# 🌟 Exercise 1: Currencies
# Instructions
# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share the same label you should raise an error.

# >>> str(c1)
# '5 dollars'
# >>> int(c1)
# 5
# >>> repr(c1)
# '5 dollars'
# >>> c1 + 5
# 10
# >>> c1 + c2
# 15
# >>> c1 
# 5 dollars
# >>> c1 += 5
# >>> c1
# 10 dollars
# >>> c1 += c2
# >>> c1
# 20 dollars
# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>

class Currency:
    def __init__(self, currency: str, amount: int):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        if self.amount == 1:
            return f"{self.amount} {self.currency}"
        return f"{self.amount} {self.currency}s"

    def __repr__(self) -> str:
        return self.__str__()
    
    def __int__(self):
        return self.amount
    
    def __add__(self, other_currency):
        # Check if other_currency is an instance of the Currency class
        if isinstance(other_currency, Currency):
            # If the currency types are different, raise a TypeError
            if self.currency != other_currency.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other_currency.currency}>")
            # Return a new Currency object with the combined amount            
            return Currency(self.currency, self.amount + other_currency.amount)
        elif isinstance(other_currency, (int, float)):
            return Currency(self.currency, self.amount + other_currency)
        else:
            raise TypeError(f"Unsupported addition between Currency and {type(other_currency).__name__}")

    def __iadd__(self, other_currency):
        if isinstance(other_currency, Currency):
            if self.currency != other_currency.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other_currency.currency}>")
            # Add the amounts and update self.amount
            self.amount += other_currency.amount
        elif isinstance(other_currency, (int, float)):
            self.amount += other_currency
        else:
            raise TypeError(f"Unsupported addition between Currency and {type(other_currency).__name__}")
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
# print(c1 + c3)

# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:
# import module_name 
# OR 
# from module_name import function_name 
# OR 
# from module_name import function_name as fn 
# OR
# import module_name as mn

from func import add_numbers

print(add_numbers(3, 40))

# 🌟 Exercise 3: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module


from string import ascii_letters
from random import choice


print(''.join(choice(ascii_letters) for i in range(5)))

# 🌟 Exercise 4 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

import datetime

print(datetime .date.today())

# Exercise 5 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

def time_until():
    today = datetime.datetime.now()  # already imported module in previous exrcise
    NY = datetime.datetime(2025,1,1)
    delta = NY - today
    days_until = delta.days
    hours_until = (delta.total_seconds())/(60*60)
    print(f"the 1st of January is in {days_until} days and {hours_until} hours.")

time_until()

# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.

def days_life(bday_str: str):
    date_format = '%Y/%m/%d %H:%M:%S'
    date = datetime.datetime.strptime(bday_str, date_format)
    now = datetime.datetime.now()
    difference = now - date
    difference_in_minutes = difference.total_seconds() / 60
    print(f"You live {difference_in_minutes} minutes")
days_life(input("Enter your birthday like this YYYY/MM/DD hh/mm/ss\n"))

# Exercise 7 : Faker Module
# Instructions
# Install the faker module, and take a look at the documentation
# and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list.
# Each user has the following keys: name, adress, langage_code. 
# Use faker to populate them with fake data.

from faker import Faker

fake = Faker()

users = []
def new_user():
    user = {
    "name" : fake.name(),
    "adress" : fake.street_address(),
    "language_code" : fake.language_code()
    }
    users.append(user)

for i in range(int(input("Enter number of fake users\n"))):
    new_user()

print(*users, sep="\n")

