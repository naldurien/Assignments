# Grocery App Assignment

# Exception Handling Added to "add items to a store's list", del_store(), and del_item()

# refactored since yesterday 2/8/21: 
# last known working version as of 2/9/21 @ 1634: 
# - added float to price
# - functionalized prompt(), add_store(), add_item(), display_all(), and display_stores()
# - Item class moved to its own module
# - tried moving Store class to its own module, but that keeps breaking things
# - added del_store() function to delete stores
# - added \n characters to several printed statements to improve readability
# - removed "Master List" terminology
# ******************************
# current version:
# - added del_item() function to delete stores
# - added exception handling to "add items to a store's list", del_store(), and del_item()


store_list = []
from item_class import Item


#Store class (and the add_item function as part of that class) breaks things if moved to its own module
class Store:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.item_list = []
    
    def add_item(self):
        item = input("\nEnter an item name: ")
        price = float(input("Enter the item's price: "))
        qty = input("Enter desired quantity: ")
        create_item = Item(item, price, qty)
        store_list[store_select-1].item_list.append(create_item)
        print(f"\n{create_item.name}, Price: ${create_item.price}, Qty: {create_item.qty}")


#Item class moved to its own module


def prompt():
    selection = input("""
    Press 1 to add a store.
    Press 2 to add items to a store's list.
    Press 3 to view all current lists.
    Press 4 to delete items from a store.
    Press 5 to delete a store completely.
    Press q to quit.

    Enter your selection: """)
    return selection


def display_stores():
    counter = 1
    print("\nCurrent Stores:\n")
    for i in store_list:
        print(f"{counter} - {i.name}, located at {i.address}")
        counter +=1

#Still in progress...breaks stuff right now, just trying to reduce duplicate code.
# def display_items():
#     print("\nCurrent Items in This Store's List:")
#     counter = 1
#     for i in chosen_store.item_list:
#         print(f"{counter}: {i.name} - ${i.price} - Qty: {i.qty}")
#         counter +=1

def add_store():
    store = input("\nEnter a store name: ")
    address = input("Enter store address: ")
    if store not in store_list:
        create_store = Store(store, address)
        store_list.append(create_store)
        display_stores()
        

def del_store():
    try:
        display_stores()
        store_select = int(input("\nSelect a store by number: "))
        store_list.pop(store_select-1)
        display_stores()
    except ValueError:
        print("Please enter the store's number instead of its name.")
    except:
        print("Undefined error; please try again.")


def del_item():
    display_stores()
    store_select = int(input("\nSelect a store by number: "))
    chosen_store = store_list[store_select-1]
    print("\nCurrent Items in This Store's List:")
    counter = 1
    for i in chosen_store.item_list:
        print(f"{counter}: {i.name} - ${i.price} - Qty: {i.qty}")
        counter +=1
    try:
        item_select = int(input("\nSelect an item to delete by number: "))  
    except ValueError:
        print("Please enter the item's number instead of its name.")
    except:
        print("Undefined error; please try again.")
    chosen_store.item_list.pop(item_select-1)
    print("\nCurrent Items in This Store's List:")
    new_counter = 1
    for i in chosen_store.item_list:
        print(f"{new_counter}: {i.name} - ${i.price} - Qty: {i.qty}")
        counter +=1
    

def display_all():
    print("\n- - - LIST OF ALL STORES, WITH ITEM SUBLISTS FOR EACH STORE - - -")
    counter = 1
    for i in store_list:
        print(f"{counter} - {i.name}, located at {i.address}")
        counter +=1
        for j in i.item_list:
            print(f"{j.name} - ${j.price} - Qty: {j.qty}")


while True:
#Bring result of prompt into the while loop:
    selection = prompt()

# 1: Create a Store object and add it to a list:
    if selection == "1":
        add_store()

# 2: View store list, let user select a store and add an item, 
# create an Item object and append to store's self.items list]
    if selection == "2":
        try:
            display_stores()
            store_select = int(input("\nSelect a store by number: "))
            store_list[store_select-1].add_item()
        except ValueError:
            print("\nPlease enter the store's number instead of its name.")
        except:
            print("\nUndefined error; please try again.")

# 3: View all lists for all stores simultaneously.
    if selection == "3":
        display_all()

# 4: Delete a store.
    if selection == "4":
        del_item()

# 5: Delete items from a store.
    if selection == "5":
        del_store()

# 6: Allow user to exit.          
    if selection == "q":
        quit()

