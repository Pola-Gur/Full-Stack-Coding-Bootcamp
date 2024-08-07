# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples
# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }
# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }
# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

word = input("Enter a word\n")
letters = {}
cnt = 0
for w in word:
    if not w in letters:
        letters[w] = [cnt]
    else:
        letters[w].append(cnt)
    cnt += 1
print(letters)    

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Hint : make sure to convert the amount from dollars to numbers. Create a program that deletes the $ sign, and the comma (for thousands)

# Examples
# The key is the product, the value is the price
# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# wallet = "$300"
# ➞ ["Bread", "Fertilizer", "Water"]
# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
# wallet = "$100" 
# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# # In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# # instead you can by the Spoon that is $2
# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }
# wallet = "$1" 
# ➞ "Nothing"


items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}
wallet = "$100"
wallet = wallet.replace("$", '')
wallet = int(wallet)
acceptable = []
for item in items_purchase:
    items_purchase[item] = items_purchase[item].replace("$", '')
    # update fro previous string:
    items_purchase[item] = items_purchase[item].replace(",", '')
    if int(items_purchase[item]) <= wallet:
        acceptable.append(item)  # if we're talking about hypothetical opportunity to buy
if acceptable:
    print(acceptable)
else:
    print("Nothing")

#option 2, if we buy everything we see in the store
buy_evrth = []
for item in items_purchase:
    if int(items_purchase[item]) <= int(wallet):
        buy_evrth.append(item) 
        wallet -=  int(items_purchase[item])
if buy_evrth:
    print(buy_evrth) 
else:
    print("Nothing")       