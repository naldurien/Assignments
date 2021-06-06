# Week 2 Day 2 Activity - Palindrome Unit Tests
# Write the Palindrome App again, but this time start by writing 
# the unit tests. Create a class for Palindrome.

class Palindrome:
    def __init__(self, word):
        self.word = word
        self.reverse = ""
    
    def is_palindrome(self, word):
        try:
            for i in range((len(self.word)-1), -1, -1):
                self.reverse += self.word[i]
            return self.word == self.reverse
        except TypeError:
            print("Please try again with a word instead of a number.")
        except:
            print("Undefined error. Please try again.")

