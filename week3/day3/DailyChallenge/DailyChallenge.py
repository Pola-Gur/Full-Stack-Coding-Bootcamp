# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

class Circle:
    def __init__(self, radius):
        self.radius = radius
        self.diameter = self.radius * 2

    def __str__(self):
        return f"This circle\'s diameter is {self.diameter} and radius is {self.radius}"

    def __repr__(self):
        return f"{self.diameter}:int \n {self.radius}:int"
    
circle1 = Circle(5)
print(circle1)
print(repr(circle1))