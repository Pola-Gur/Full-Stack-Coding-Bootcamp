import psycopg2

# Database connection parameters (same as in menu_item.py)
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
    
# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

class MenuManager:
    # @classmethod
    def get_by_name():
        ...
#   def get_by_name(cls, item_name):
#         connection = get_database_connection()
#         if connection:
#             try:
#                 cursor = connection.cursor()
#                 query = "SELECT * FROM Menu_Items WHERE item_name = %s"
#                 cursor.execute(query, (item_name,))
#                 item = cursor.fetchone()
#                 if item:
#                     return item
#                 else:
#                     return None
#             except psycopg2.Error as e:
#                 print(f"Error retrieving item by name: {e}")
#             finally:
#                 connection.close()
    def all_items():
        ...
    # @classmethod
    # def all_items(cls):
    #     connection = get_database_connection()
    #     if connection:
    #         try:
    #             cursor = connection.cursor()
    #             query = "SELECT * FROM Menu_Items"
    #             cursor.execute(query)
    #             items = cursor.fetchall()
    #             return items
    #         except psycopg2.Error as e:
    #             print(f"Error retrieving all items: {e}")
    #         finally:
    #             connection.close()
# Codebox:

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()
