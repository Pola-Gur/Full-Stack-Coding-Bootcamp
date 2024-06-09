# 🌟 Exercise 1 : Favorite Numbers
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

my_fav_numbers = {7, 3, 21, 30, 15, 14}
some = {my_fav_numbers.add(i) for i in [18, 3]}
my_fav_numbers.remove(3)
friend_fav_numbers = {77, 78, 779, 79, 71, 73}
our_fav_numbers = my_fav_numbers | friend_fav_numbers

# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

print("No")
    #I used the print function to highlight the answer among the text of the exercises


# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
basket.count("Apples")
basket = []
print(basket)



# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

list = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
# or
another_list = []
i = 1.5
while i <= 5:
    another_list.append(i)
    i += 0.5


# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

ex5_list = [i for i in range(1, 21, 1)]
# or
ex5_another_list = []
for i in range(1, 21):
    ex5_another_list.append(i)
    if i%2 == 0:
        print(ex5_another_list[i-2], end=' ')

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

print() #For ease of reading

user = input("What is your name?\n")
while user != "Pola":
    user = input("What is your name? ")


# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

fruits = input("What is your favorite fruits? separate the fruits with a single space, eg. 'apple mango cherry'.\n")
fru_list = fruits.split()
new_fru = input("Enter ftuit's name\n")
if new_fru in fru_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

toppings = []
topping = input("Enter a pizza topping, if you enter ‘quit’, I'll stop asking.\n")
print(f"you’ll add {topping} to your pizza.")
while topping != "quit":
    toppings.append(topping)
    topping = input("Enter a pizza topping, if you enter ‘quit’, I'll stop asking.\n")
    print(f"you’ll add {topping} to your pizza.")
print("Your toppings:\n", *toppings) 
print("Total price ", 10+2.5*(len(toppings)))   


# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

n = input("Enter the number of visitors\n")
cnt = 0
total = 0
while cnt < int(n):
    age = input("What is your age?\n")
    if int(age) > 12:
        total += 15
    elif 3 <= int(age) <= 12:
        total += 10
    cnt+=1
print("Total cost: ", total)   

m = input("Enter the number of visitors\n")
names = []
count = 0
while count < int(m):
    name = input("What is your name?\n")
    names.append(name)
    count+=1
exeptions = []
for i in range(len(names)):
    print(names[i], end=', ')
    age = input("how old are you?\n")
    if int(age) < 16 or int(age) > 21:
        exeptions.append(names[i])
for exeption in exeptions:
    names.remove(exeption)
print("Welcome to the cinema: ", *names, sep=" ")



# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
t = 0
while t < len(sandwich_orders):
    if "Pastrami" in (sandwich_orders[t]):
        sandwich_orders.remove(sandwich_orders[t])
    t+=1
finished_sandwiches = []   
while len(sandwich_orders) != 0:
    finished_sandwiches.append(sandwich_orders[0])
    sandwich_orders.remove(sandwich_orders[0])
for sandwich in finished_sandwiches:
    print('I made your ', sandwich)