import psycopg2

# Database connection parameters (same as in menu_item.py)
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'passforme'
DATABASE = 'Restaurant_menu'
PORT = "5432"

connection = psycopg2.connect(
            host=HOSTNAME,
            user=USERNAME,
            password=PASSWORD,
            dbname=DATABASE,
            port=PORT
        )

# In the file menu_manager.py, create a new class called MenuManager
# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

class MenuManager:
    @classmethod
    def get_by_name(cls, item_name):
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (item_name,))
        item = cursor.fetchone()
        if item:
            return item
        else:
            return None

    @classmethod
    def all_items():
        cursor = connection.cursor()
        query = "SELECT * FROM Menu_Items"
        cursor.execute(query)
        items = cursor.fetchall()
        return items
    
    
# Codebox:

# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# items = MenuManager.all()
