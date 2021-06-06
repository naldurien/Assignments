class Employee:
    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary


    def give_raise(self, payraise = 5000):
        self.salary = float(self.salary) + payraise
        print('{:.2f}'.format(self.salary))
        return self.salary




# MANUAL TESTING:
# tyler = Employee('Tyler', 'Durden', '70000')
# tyler.give_raise()
# tyler.give_raise(10000)
