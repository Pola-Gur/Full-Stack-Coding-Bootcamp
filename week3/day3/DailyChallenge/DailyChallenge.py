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


from math import pi

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")
        
    def __str__(self):
        return f"This circle\'s diameter is {self.diameter} and radius is {self.radius}"

    def __repr__(self):
        return f"{self.diameter}:int \n {self.radius}:int"
    
    def __eq__(self, other_circle: "Circle") -> bool:
        return self.radius == other_circle.radius

    def __lt__(self, other_circle: "Circle") -> bool:
        return self.radius < other_circle.radius

    def __add__(self, other_circle: "Circle") -> int | float:
        return Circle(radius=self.radius + other_circle.radius)
    
    def area(self):
        return pi*self.radius*self.radius

circle1 = Circle(radius=5)
print(circle1)
print(repr(circle1))
circle2 = Circle(radius=7)
circle3 = Circle(radius=5)
circle4 = Circle(radius=13)
circle5 = Circle(radius=11)
circles = [circle1, circle2, circle3, circle4, circle5]

print(f"Area of circle1 is {circle1.area()}")

print("Sorted circles radius:\n")
for circle in circles:
    print(f"Radius: {circle.radius}, Diameter: {circle.diameter}")

if circle1 == circle2:
    print("Radius of circle1 and circle2 are equal")
if circle1 == circle3:
    print("Radius of circle1 and circle3 are equal")
if circle1 < circle2:
    print("The radius of circle 1 is less than the radius of circle 2")
print("New circle with radius sum of circle1 and circle2:", circle1 + circle2)
print(f"New circle radius: {(circle1 + circle2).radius}")
print(f"New circle diameter: {(circle1 + circle2).diameter}")