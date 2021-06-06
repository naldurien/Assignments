# 02/16/21 Algorithms
# Google Doc: https://docs.google.com/document/d/1-h5UVE_EBWvIaMCoTkS0xsVPqcKIhogG7uOfbDW7hwM/edit

# Challenge 1: Create a function that reads a list of numbers and returns the second highest number.
numbers = [7, 2, 5, 6, 8, 3, 3]
def second_highest(lst):
    lst.sort()
    return lst[-2]

# Challenge 2: Create a function that takes a string input and returns a string with the cases flipped. If my first input was ‘PYTHon RoCKS’, then the program should return ‘pythON rOcks’.
queen = "IS thIS thE REal LiFe"
def flip_cases(string):
    return string.swapcase()

# Challenge 3: See separate file, teacher_class_algo_challenge.py

# Challenge 4: Create a function that takes two numbers, returning the percentage A of B - for example, if percentage(40, 220) was entered, return 40% of 220, or 88. If percentage(50,100) was entered, return 50% of 100, or 50. 
# Challenge 4.5: Despite printing excellent instructions with your percentage() function, people keep inputting percents in input A, inputting things like percentage(‘50%’, 200). Find a way to determine if your user is inputting correctly, and if not, warn them to input the correct type of input.
# Challenge 5.0 - Your boss tells you to stop yelling at the users and fix it on your end - whether or not someone entered 50 or ‘50%’, the program should return 50% of input B. 

def percentage():
    num1 = input("Please enter a percentage using a whole number and no percent sign: ")
    num2 = int(input("Please enter the number you wish the percentage taken of: "))
    bad_chars = ["%", ":"]
    for i in bad_chars:
        num1 = num1.replace(i, '')
    try:
        percent = float(num1)/100
        print(percent*num2)
    except TypeError:
        print("Please enter your percentage as a whole number with no percent signs.")
    except: 
        print("Please enter your percentage as a whole number with no percent signs.")

percentage()