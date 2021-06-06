# Week 2 Day 1 Activity - User and Address
# Create a User class and Address class, with a relationship between
# them such that a single user can have multiple addresses.


class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.addresses = []


    def get_first_name(self, first_name):
        return self.first_name


    def get_last_name(self, last_name):
        return self.last_name


    def add_address(self, address):
        str_address = str(address)
        self.addresses.append(str_address)


    def display_addresses(self):
        print(f"""Addresses listed for {self.first_name} {self.last_name}:\n {self.addresses}""")

    def __str__(self):
        return f"{str(self.first_name)} {str(self.last_name)}"




class Address:
    def __init__(self, street, city, state, zip_code):
        self.street = street
        self.city = city
        self. state = state
        self.zip_code = zip_code


    def get_street(self, street):
        return self.street


    def get_city(self, city):
        return self.city


    def get_state(self, state):
        return self.state


    def get_zip_code(self, zip_code):
        return self.zip_code


    def __str__(self):
        return f"{str(self.street)}, {str(self.city)}, {str(self.state)} {str(self.zip_code)}"


mickey_mouse = User('Mickey', 'Mouse')
magic_kingdom = Address('1180 Seven Seas Dr', 'Lake Buena Vista', 'FL', '32836')
epcot = Address('200 Epcot Center Dr', 'Orlando', 'Florida', '32821')


mickey_mouse.add_address(magic_kingdom)
mickey_mouse.add_address(epcot)
mickey_mouse.display_addresses()
