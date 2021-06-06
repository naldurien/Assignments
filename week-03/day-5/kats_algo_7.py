# Challenge 7: Alphabetize Vendors.txt
def alphabetize():
    alpha_string = ""
    with open("vendors.txt") as file_object:
        vendors = file_object.readlines()
        ven_list = vendors[0].split(",")
        bad_chars = [" ", ",", "\n"]
        for vendor in ven_list:
            for i in bad_chars:
                vendor = vendor.replace(i, "")
        alpha_list = sorted(ven_list)
        for index in alpha_list:
            alpha_string += f" {index},"
    with open("vendors.txt", "w") as file_object:
        file_object.write(alpha_string)

