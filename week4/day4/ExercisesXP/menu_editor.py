import psycopg2

# Database connection parameters
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'your_password'
DATABASE = 'restaurant_db'

# Function to establish a connection to PostgreSQL
def get_database_connection():
    try:
        connection = psycopg2.connect(
            host=HOSTNAME,
            user=USERNAME,
            password=PASSWORD,
            dbname=DATABASE
        )
        return connection
    except psycopg2.Error as e:
        print(f"Error connecting to PostgreSQL database: {e}")
        return None
    
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
  
    # Display and manage program menu options here
    # pass
    

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

# def add_item_to_menu(item_name, item_price):
# connection = get_database_connection()
# if connection:
#     try:
#         cursor = connection.cursor()
#         query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
#         cursor.execute(query, (item_name, item_price))
#         connection.commit()
#         print("Item added successfully!")
#     except psycopg2.Error as e:
#         print(f"Error adding item: {e}")
#     finally:
#         connection.close()


# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

def remove_item_from_menu():
    for_remove = input('Enter item for remove')


# def remove_item_from_menu(item_name):
#     connection = get_database_connection()
#     if connection:
#         try:
#             cursor = connection.cursor()
#             query = "DELETE FROM Menu_Items WHERE item_name = %s"
#             cursor.execute(query, (item_name,))
#             connection.commit()
#             print("Item removed successfully!")
#         except psycopg2.Error as e:
#             print(f"Error removing item: {e}")
#         finally:
#             connection.close()

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update from the restaurant’s menu, as well as to input the name and price they want to change them with. This function will not interact with the menu itself, but simply create a MenuItem object and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

def update_item_from_menu():
    print("Enter the current name and price of the item they want to update")
    current_name = input('Name\n')
    currnet_price = input("Price\n")
    new_name = input("Enter new name\n")
    new_price = input("Enter new price")


# def update_item_from_menu(current_name, new_name, new_price):
#     connection = get_database_connection()
#     if connection:
#         try:
#             cursor = connection.cursor()
#             query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
#             cursor.execute(query, (new_name, new_price, current_name))
#             connection.commit()
#             print("Item updated successfully!")
#         except psycopg2.Error as e:
#             print(f"Error updating item: {e}")
#         finally:
#             connection.close()    

# show_restaurant_menu() - print the restaurant’s menu.

def show_restaurant_menu():
    print("this place for restaurant's menu")    
    MenuManager.all_items()


# def show_restaurant_menu():
#     connection = get_database_connection()
#     if connection:
#         try:
#             cursor = connection.cursor()
#             query = "SELECT * FROM Menu_Items"
#             cursor.execute(query)
#             items = cursor.fetchall()
#             for item in items:
#                 print(f"{item[0]} - {item[1]}: ${item[2]}")
#         except psycopg2.Error as e:
#             print(f"Error retrieving restaurant menu: {e}")
#         finally:
#             connection.close()

# When the user chooses to exit the program, display the restaurant menu and exit the program.
