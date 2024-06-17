# 🌟 Exercise 1 : Pets
# Instructions
# Using this code:

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


# Create another cat breed named Siamese which inherits from the Cat class.
# Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.
# Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, and pass the variable all_cats to the new instance.
# Take all the cats for a walk, use the walk method.

class Siamese(Cat):
    pass


all_cats = [Bengal("Murr", 7), Siamese("Furr", 5), Chartreux("Purr", 10)]

sara_pets = Pets(all_cats)

sara_pets.walk()


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.

class Dog:
    def __init__(self, name: str, age: int, weight: float):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self) -> str:
        return f"{self.name} is barking"
    
    def run_speed(self) -> float:
        return self.weight/self.age*10
    
    def get_strength(self) -> float:
        return self.run_speed() * self.weight
    
    def fight(self, other_dog: "Dog") -> str:
        if self.get_strength() >= other_dog.get_strength():
            winner = self.name
            looser = other_dog.name
        else:
            winner = other_dog.name
            looser = self.name
        return f"{winner} won the fight with {looser}"


barker1 = Dog("Hot dog", 13, 7)
barker2 = Dog("Puff", 5, 5)
barker3 = Dog("monkey", 3, 6)

barker1.bark()
barker2.bark()
barker3.bark()
print(barker1.fight(barker2))
print(barker1.fight(barker3))
print(barker2.fight(barker3))

# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

from random import choice


class PetDog(Dog):
    def __init__(self, name, age, weight, trained: bool = False):
        super().__init__(name, age, weight)
        self.trained = trained
    
    def train(self) -> None:
        print(self.bark())
        self.trained = True

    def play(self: "PetDog", *dog_names: str) -> None:
        dogs = ", ".join([dog_name for dog_name in dog_names])
        return print(f"{dogs} all play together")

    # def play(self, dog_names: "tuple[Dog, ...]") -> str:
    #     print(f"{dog_names} all play together")

    def do_a_trick(self) -> None:
        tricks = [f"{self.name} does a barrel roll", f"{self.name} stands on his back legs", f"{self.name} shakes your hand", f"{self.name} plays dead"]
        if self.trained:
            return print(choice(tricks))
            

dog_names = [barker1, barker2, barker3]
mega_barker = PetDog("Foo", 18, 35)
mega_barker.play(barker1.name, barker2.name, barker3.name)
mega_barker.do_a_trick()

# Exercise 4 : Family
# Instructions
# Create a class called Family and implement the following attributes:
# members: list of dictionaries
# last_name : (string)
# Implement the following methods:
# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.
# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.
#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]


class Family:
    def __init__(self, last_name: str, members: list[dict[str, str | int | bool]]):
        self.members = members
        self.last_name = last_name

    def born(self, **child):
        self.members.append(child)
    
    def is_18(self, name: str):
        """
        Returns True if there's person named 'name' over 18 y.o.
        """
        for i in range(len(self.members)):
            if self.members[i]["name"] == name:
                if self.members[i]["age"] >= 18:
                    self.members[i]["is_child"] = False
                    return True
                else:
                    self.members[i]["is_child"] = True
            else:
                continue


    def family_presentation(self):
        print(f"\nIn {self.last_name} family:\n")
        print(self.members)


family1 = Family( "Petrov", [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
    ])

family1.born(name = "Nick", age=10)
family1.is_18("Nick")


family1.born(name = "Zoe", age = 21)
family1.is_18("Zoe")
family1.family_presentation()

# Exercise 5 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : power and incredible_name. (See Point 4)
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Add a method called incredible_presentation which :
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)
# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]

# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.


class TheIncredibles(Family):
    def __init__(self, last_name: str, members: list[dict[str, str | int | bool]]):
        super().__init__(last_name, members)

    def use_power(self):
        for i in range(len(self.members)):
            try:
                if self.members[i]["age"] >= 18:
                    print(self.members[i]["power"])
            except:
                print(f"{self.members[i]["name"]} not over 18 years old")

    def incredible_presentation(self):
        print(f"Here is our powerful family")
        super(TheIncredibles, self).family_presentation()


family2 = TheIncredibles("Incredibles", [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ])

family2.incredible_presentation()

family2.born(name="baby Jack", power="Unknown Power")
family2.incredible_presentation()