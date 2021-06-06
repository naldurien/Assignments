# Week 2 Day 2 Activity - Palindrome Unit Tests
# Write the Palindrome App again, but this time start by writing 
# the unit tests. Create a class for Palindrome.

import unittest
from tdd_palindrome import Palindrome 

class PalindromeTests(unittest.TestCase):


    def test_is_this_a_palindrome(self):
        pal1 = Palindrome('racecar')
        self.assertEqual(pal1.is_palindrome('racecar'), True)
       

    def test_is_this_not_a_palindrome(self):
        pal2 = Palindrome('banana')
        self.assertEqual(pal2.is_palindrome('banana'), False)




if __name__ == '__main__':
    unittest.main()

