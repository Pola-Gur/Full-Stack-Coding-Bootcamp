# Given a “Matrix” string:
# The matrix is a grid of strings (alphanumeric characters and spaces) with a hidden message in it.
# A grid means that you could potentially break it into rows and columns, like here:

import string
import re

start = """7ii
Tsx
h%?
i #
sM 
$a 
#t%
^r!"""

pattern = r'\n'
start = re.sub(pattern, '', start)
decoder = []
for j in (range(3)):
    for i in range(0+j, 24, 3):
        if start[i] in string.ascii_letters or start[i] == " ":
            decoder.append(start[i])

print(*decoder)
