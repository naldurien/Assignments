# Week 2 Day 2 Activity - Factorial Unit Tests
# Write the Factorial app again, but this time start by writing unit tests.

import unittest
from grocery_eh import Store
from grocery_eh import Item
from grocery_eh import add_store
from grocery_eh import add_item
from grocery_eh import display_list

class GroceryTests(unittest.TestCase):
    def setUp(self):
        self.s = Store('Kroger', '4875 Floyd Rd SW, Mableton, GA 30126')
        self.i = Item('apples', '0.79', '6')

    def test_add_store(self):
        assert self.s.add_store() == self.store_list

  #  def test_add_item(self):
  #      pass

  #  def test_display_list(self):
  #      pass


   # def test_division(self):
   #     calc3 = Calculator()
   #     result = calc3.calc(1, "/", 8)
    #    self.assertEqual(result, 0.125)


if __name__ == '__main__':
    unittest.main()
