from random import shuffle
print("Enter a string. The string must be 10 characters long.")
var = input()
if len(var) > 10:
    print("string too long")
elif len(var) < 10:
    print("string not long enough")
else:
    print("perfect string")
print(var[0], var[-1])

for i in range(len(var)):
    print(var[:i])

new_var = list(var)
shuffle(new_var)
print(*new_var, sep="")

# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.

# Then, print the first and last characters of the given text.

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod