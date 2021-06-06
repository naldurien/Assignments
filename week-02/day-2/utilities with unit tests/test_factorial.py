# Week 2 Day 2 Activity - Factorial Unit Tests
# Write the Factorial app again, but this time start by writing unit tests.

import unittest
from tdd_factorial import Factorial

class FactorialTests(unittest.TestCase):

    def test_factorial_of_positive_number(self):
        fac1 = Factorial(5)
        self.assertEqual(fac1.calc_factorial(5), 120)


    def test_factorial_of_zero(self):
        fac2 = Factorial(0) 
        self.assertEqual(fac2.calc_factorial(0), 1)


    def test_factorial_of_negative_number(self):
        fac3 = Factorial(-1) 
        self.assertEqual(fac3.calc_factorial(-1), 'Factorials cannot be performed on negative numbers.')


if __name__ == '__main__':
    unittest.main()
