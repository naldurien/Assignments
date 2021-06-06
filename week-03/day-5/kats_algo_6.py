# Challenge 6 - Clean up list of names and addresses; if complete address i
# is present, print message about sending flowers. Otherwise, print message to 
# serial-dater boss who's sending flowers to 4 different girls for
# Valentine's Day!

girls = ["Vanessa - 16 West 34th St", "Alessandra - ???", "Marissa - ???", "Andrea - 99 Red Lake Dr", "Vanessa - 14 Pleated Jeans Ave", "Maria - 77 Pasha Dr", "Angela - ???", "Olivia - 12 Buxton Rd", "Penelope - North Rd"]

import re

def valentines(lst):
    girl_d = {}
    for index in lst:
        girl =  index.split("-")
        if girl_d.get(girl[0]):
            continue
        else: 
           girl_d[girl[0]] = girl[1]
    print(girl_d)
    for key in girl_d:
        street_num = re.match("\s[0-9]+", girl_d[key])
        if street_num:
            print(f"Sent flowers to {key}at{girl_d[key]}.")
        else:
           print("Start cleaning up your act!")

