# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

class MenuItem:
    name = 
    price =

    def save():
        ...

    def delete():
        ...

    def update(new_name, new_price):
        ...


# Part 2

# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
    def show_user_menu():
        program_menu = """Our action menu:
        View an Item as V
        Add an Item as A
        Delete an Item as D
        Update an Item as U
        Show the Menu as S """
        save()   
    

# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

# add_item_to_menu() - this function should ask the user to input the item’s name and price. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

    def add_item_to_menu():
        item = input("Choose your action with one letter\n")
        print(f'{item} was added successfully')

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

    def remove_item_from_menu():
        for_remove = input('Enter item for remove')
        delete()


# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

    def update_item_from_menu():
        print("Enter the current name and price of the item they want to update")
        current_name = input('Name\n')
        currnet_price = input("Price\n")
        new_name = input("Enter new name\n")
        new_price = input("Enter new price")

# show_restaurant_menu() - print the restaurant’s menu.

    def show_restaurant_menu():
        print("this place for restaurant's menu")    
        MenuManager.all_items()
# When the user chooses to exit the program, display the restaurant menu and exit the program.
