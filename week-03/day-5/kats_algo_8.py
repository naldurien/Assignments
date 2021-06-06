coding_dict = {"algorithm": "a set of instructions or rules designed to solve a definite problem", "program": "an organized collection of instructions, which when executed perform a specific task or function", "API": "Application Programming Interface (API) - a set of rules, routines, and protocols to build software applications", "argument": "a value that is passed into a command or a function", "loop": "a sequence of instructions that repeat the same process over and over until a condition is met and it receives the order to stop"}

def search_dictionary(dict):
    search = input("Please enter your search term: ")
    results = ""
    if search not in dict:
        no_result = f"{search} - we don't have that term in our programming dictionary.\n"
        with open("searchresults.txt", "a") as file_object:   
            file_object.write(no_result)                        
    for key in dict:
        if key == search:
            results += key + ": " + dict[key] + "\n"
        with open("searchresults.txt", "a") as file_object:
            file_object.write(results)


