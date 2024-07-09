from menu_item import MenuItem
from menu_manager import MenuManager

# Part 2

# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# Display and manage program menu options here
# pass
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

def show_user_menu():
    program_menu = """Our action menu:
    View an Item as V
    Add an Item as A
    Delete an Item as D
    Update an Item as U
    Show the Menu as S """
    print(program_menu)
    user_input = input("Choose your action with one letter\n").strip().upper()
    if user_input == 'V':
        view_item()
    elif user_input == 'A':
        add_item_to_menu()
    elif user_input == 'D':
        remove_item_from_menu()
    elif user_input == 'U':
        update_item_from_menu()
    elif user_input == 'S':
        show_restaurant_menu()
    elif user_input == 'E':
        show_restaurant_menu()
        print("Exiting the program.")
        exit()
    else:
        print("Invalid option. Please try again.")


# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

def add_item_to_menu():
    item_name = input("Enter the item's name: ").strip()
    item_price = int(input("Enter the item's price: ").strip())
    item = MenuItem(item_name, item_price)
    item.save()

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

def remove_item_from_menu():
    item_name = input("Enter the name of the item to remove: ").strip()
    item = MenuItem(item_name, 0)
    item.delete()

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

def update_item_from_menu():
    current_name = input("Enter the current name of the item: ").strip()
    new_name = input("Enter the new name of the item: ").strip()
    new_price = int(input("Enter the new price of the item: ").strip())
    item = MenuItem(current_name, 0)
    item.update(new_name, new_price)


# show_restaurant_menu() - print the restaurant’s menu.

def show_restaurant_menu():
    items = MenuManager.all_items()
    if items:
        for item in items:
            print(f"{item[1]}: ${item[2]}")
    else:
        print("The menu is empty.")
    
def view_item():
    item_name = input("Enter the name of the item to view: ").strip()
    item = MenuManager.get_by_name(item_name)
    if item:
        print(f"{item[1]}: ${item[2]}")
    else:
        print("Item not found.")

if __name__ == "__main__":
    while True:
        show_user_menu()

# When the user chooses to exit the program, display the restaurant menu and exit the program.
