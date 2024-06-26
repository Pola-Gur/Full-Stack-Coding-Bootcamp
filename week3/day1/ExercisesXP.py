# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.


class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat1 = Cat("Furr", 3)
cat2 = Cat("Mur", 7)
cat3 = Cat("Hatul", 5)
cats = [cat1, cat2, cat3]

# approach 1 - using for loop

def get_oldest_cat(cat_list: list[Cat]):

    oldest_cat = cats[0]
    for cat in cat_list:
        if cat.age > oldest_cat.age:
            oldest_cat = cat
    return oldest_cat

# # approach 2
# def ger_cat_age(cat: Cat) -> int:
#     return cat.age

# # approach 2 solution
# oldest_cat = max[cats, key=get_cat_age]

def main():

    # approach 1 solution
    oldest_cat = get_oldest_cat(cats)
    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

if __name__ == "__main__":
    main()


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.


class Dog:
    def __init__(self, dog_name: str, dog_height: int | float):
        self.name = dog_name
        self.height = dog_height

    def bark(self):
        print(f"{self.name} goes woof!") 

    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")


davids_dog = Dog("Rex", 50)

print(f"David's dog is {davids_dog.name} and it's heighgt {davids_dog.height}")

davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog is {sarahs_dog.name} and it's heighgt {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()


dogs = [davids_dog, sarahs_dog]
def get_bigger_dog(dog_list: list[Dog]):

    bigger_dog = dogs[0]
    for dog in dog_list:
        if dog.height > bigger_dog.height:
            bigger_dog = dog
    return bigger_dog

def main():

    bigger_dog = get_bigger_dog(dogs)
    print(f"The biggest dog is {bigger_dog.name}, and it is {bigger_dog.height} cm.")

if __name__ == "__main__":
    main()

# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

class Song():
    def __init__(self, lyrics: list):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for string in self.lyrics:
            print(string)

strings = Song(["And you singing the song thinking this is the life", "And you wake up in the morning and your head feels twice the size", "Oh where you gonna go, where you gonna go, where you gonna sleep tonight?"])

strings.sing_me_a_song()


# Exercise 4 : Afternoon At The Zoo
# Instructions
# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo():
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold: str):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        for animal in sorted_animals:
            first_letter = animal[0]
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = [animal]
            else:
                grouped_animals[first_letter].append(animal)

        sorted_grouped_animals = {}
        counter = 1
        for key in sorted(grouped_animals.keys()):
            sorted_grouped_animals[counter] = grouped_animals[key]
            counter += 1

        return sorted_grouped_animals
    
    def get_groups(self):
        grouped_animals = self.sort_animals()
        for group, animals in grouped_animals.items():
            print(group, animals, sep=": ")

ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Girafe")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Monkey")
ramat_gan_safari.add_animal("Wolf")
ramat_gan_safari.add_animal("Duck")
ramat_gan_safari.add_animal("Chicken")
ramat_gan_safari.add_animal("Horse")

ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Chicken")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
