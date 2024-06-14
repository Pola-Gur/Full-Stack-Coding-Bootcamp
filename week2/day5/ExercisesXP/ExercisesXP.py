# Create a TicTacToe game in python, where two users can play together.
# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.

# Tips : Consider The Following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!

print("Welcome to TIC TAC TOE!\n")

print("TIC TAC TOE\n")
field = [["*************"],
         ["* ", " ", " | ", " ", " | ", " ", " *"],  # 1-1, 1-3, 1-5
         ["*---|---|---*"],
         ["* ", " ", " | ", " ", " | ", " ", " *"],  # 3-1, 3-3, 3-5
         ["*---|---|---*"],
         ["* ", " ", " | ", " ", " | ", " ", " *"],  # 5-1, 5-3, 5-5
         ["*************"]]


player = "X"
row = 0
column = 0


def display_board():
    for i in field:
        print(*i, sep='', end="\n")


def check_win():
    if field.count(player) < 3:
        pass
    else:
        if field[1].count(player) == 3 or field[3].count(player) == 3 or field[5].count(player) == 3 or (field[1][1]== player and field[3][1]== player and field[5][1]== player) or (field[1][5]== player and field[3][5]== player and field[5][5]== player) or (field[1][3]== player and field[3][3]== player and field[5][3]== player) or (field[1][1]== player and field[3][3]== player and field[5][5]== player) or (field[5][1]== player and field[3][3]== player and field[1][5]== player):
            print(f"Player {player} won!")
            return False


def player_input():
    global column
    global row
    print(f"Player {player}'s turn..\n.")
    print("Enter row (1, 2 or 3)\n")
    row = int(input())
    print("Enter column (1, 2 or 3)\n")
    column = int(input())


display_board()


while check_win() != False:
    player_input()
    if row == 1:
        if column == 1:
            field[1][1] = player
        elif column == 2:
            field[1][3] = player
        else:
            field[1][5] = player
    elif row == 2:
        if column == 1:
            field[3][1] = player
        elif column == 2:
            field[3][3] = player
        else:
            field[3][5] = player
    else:
        if column == 1:
            field[5][1] = player
        elif column == 2:
            field[5][3] = player
        else:
            field[5][5] = player
    display_board()
    check_win()
    if player == "X":
        player = "Y"
    else:
        player = "X"