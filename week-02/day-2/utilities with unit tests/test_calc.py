# Week 2 Day 2 Activity - Calculator Unit Tests
# Write the Factorial app again, but this time start by writing unit tests.

import unittest
from tdd_calculator import Calculator

class CalculatorTests(unittest.TestCase):
    def setUp(self):
        self.c = Calculator()

 #per Azam - inside each test, initialize a new calculator and pass in the variables; don't use SetUp function.
   
    def test_addition(self):
        assert self.c.calc(1, 5, "+") == 6.0

    def test_subtraction(self):
        assert self.c.calc(1, 5, "-") == -4.0

    def test_multiplication(self):
        assert self.c.calc(1, 5, "*") == 5.0

    def test_division(self):
        assert self.c.calc(1, 5, "/") == 0.2


if __name__ == '__main__':
    unittest.main()
