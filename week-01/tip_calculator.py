def tip_calc():
    try: 
        total = float(input("\nWhat is your total? "))
    except:
        print("\nPlease enter a number with no dollar sign.")
    try:
        tip_percent = float(input("\nWhat percentage would you like to tip (as a whole number with no percent sign)? "))
        decimal_percent = tip_percent/100
        tip = total * decimal_percent
        print(f"\nYour tip amount is ${tip:.2f}.\n")
    except:
        print("\nSorry, we have encountered an error.\n")


tip_calc()
