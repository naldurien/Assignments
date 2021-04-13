def fizz_buzz():
    str_num = input("Please enter your number: ")
    num = float(str_num)
    if (num % 3 == 0) and (num % 5 == 0):
        print("FizzBuzz")
    elif (num % 3 == 0):
        print("Fizz")
    elif (num % 5 == 0):
        print("Buzz")
    else:
        print("Your number is not divisible by 3 or 5.")
        
fizz_buzz()        
