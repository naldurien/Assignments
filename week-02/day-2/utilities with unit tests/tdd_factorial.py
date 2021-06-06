# Week 2 Day 2 Activity - Factorial Unit Tests
# Write the Factorial app again, but this time start by writing unit tests.


class Factorial:
    def __init__(self, number):
        self.number = number

    def calc_factorial(self, number):
        try:
            factorial = 1
            if self.number == 0:
                return 1
            if number < 0:
               return "Factorials cannot be performed on negative numbers."
            else:
                for i in range(1, self.number + 1):
                    factorial *= i
                return factorial
        except NameError or ValueError:
            print("Factorials can only be performed on positive whole numbers (no letters).")
        except TypeError:
            print("Factorials can only be performed on whole numbers, not decimals.")
        except:
            print("Undefined error.")
      
