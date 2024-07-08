# In the file menu_item.py, create a new class called MenuItem, the attributes should be the name and price of each item.
# Create several methods (save, delete, update) these methods will allow a user to save, delete and update items from the Menu_Items table. The update method can update the name as well as the price of an item.

class MenuItem:
    def __init__(self, item_name, item_price):
        self.item_name = item_name
        self.item_price = item_price

    def save(self):
        # connection = get_database_connection()
        # if connection:
        #     try:
        #         cursor = connection.cursor()
        #         query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        #         cursor.execute(query, (self.item_name, self.item_price))
        #         connection.commit()
        #         print("Item saved successfully!")
        #     except psycopg2.Error as e:
        #         print(f"Error saving item: {e}")
        #     finally:
        #         connection.close()

    def delete(self):
        # connection = get_database_connection()
        # if connection:
        #     try:
        #         cursor = connection.cursor()
        #         query = "DELETE FROM Menu_Items WHERE item_name = %s"
        #         cursor.execute(query, (self.item_name,))
        #         connection.commit()
        #         print("Item deleted successfully!")
        #     except psycopg2.Error as e:
        #         print(f"Error deleting item: {e}")
        #     finally:
        #         connection.close()

    def update(self, new_name, new_price):
        # connection = get_database_connection()
        # if connection:
        #     try:
        #         cursor = connection.cursor()
        #         query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
        #         cursor.execute(query, (new_name, new_price, self.item_name))
        #         connection.commit()
        #         print("Item updated successfully!")
        #     except psycopg2.Error as e:
        #         print(f"Error updating item: {e}")
        #     finally:
        #         connection.close()