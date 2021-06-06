#Week 2 Day 2 Activity - EMPLOYEE RAISE

class Employee:
    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary


    def give_raise(self, payraise = 5000):
        try: 
            self.salary = float(self.salary) + payraise
            print('{:.2f}'.format(self.salary))
            return self.salary
        except NameError or TypeError:
            print("Please pass a positive number as an argument.")
        except:
            print("Please examine the argument you have passed to give_raise().")
