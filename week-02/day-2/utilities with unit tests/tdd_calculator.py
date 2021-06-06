# Week 2 Day 2 Activity - Calculator Unit Tests
# Write the Calculator app again, but this time start by writing 
# the unit tests. Create a class for Calculator.

class Calculator:
    def prompt(self):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        operand = input("Enter operand (+, -, *, /): ")
        return self.calc(num1, num2, operand)

    def calc(self, num1, num2, operand):
        if (operand == "+"):
            return num1 + num2
        elif (operand == "-"):
            return num1 - num2
        elif (operand == "*"):
            return num1 * num2
        elif (operand == "/"):
            return num1/num2



if __name__=='__main__':
    c = Calculator()
    print(c.prompt())
    

