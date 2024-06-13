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
field = ["*************",
         "* 1 | 2 | 3 *",
         "*---|---|---*",
         "* 4 | 5 | 6 *",
         "*---|---|---*",
         "* 7 | 8 | 9 *",
         "*************"]

turn = 1


def display_board():
    for i in field:
        print(i, end="\n")


# def change():
#     for i in field:
#         for j in field[i]:
#             if j == n:
#                 field[i].replace(n, player)

player = "X"
def check_win():
    if field.count(player) < 3:
        pass
    else:
        if field[2].count(player) == 3 or field[4].count(player) == 3 or field[6].count(player) == 3 or (field[1][2]== player and field[3][2]== player and field[5][2]== player) or (field[1][6]== player and field[3][6]== player and field[5][6]== player) or (field[1][10]== player and field[3][10]== player and field[5][10]== player) or (field[1][2]== player and field[3][6]== player and field[5][10]== player) or (field[5][2]== player and field[3][6]== player and field[1][10]== player):
            print(f"Player {player} won!")
            return False


def player_input():
    global turn
    display_board()
    if turn > 0:
        player = "X"    
    else:
        player = "Y"
    print(f"Player {player}'s turn..\n.")
    num = ("Enter cell number\n")
    num = input()
    turn *= -1
    for i in field:
        for j in i:
            print("i: ", i, "j: ", j, player, num)
            if j == str(num):
                j = player
    
    check_win()


while check_win != False:
    player_input()






