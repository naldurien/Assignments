def calculator():
    num1 = float(input("First number: "))
    str_op = input("Operand: ")
    num2 = float(input("Second number: "))
    if (str_op == "+"):
        print(num1 + num2)
    elif (str_op == "-"):
        print(num1 - num2)
    elif (str_op == "*"):
        print(num1 * num2)
    elif (str_op == "/"):
        print(num1/num2)

calculator()