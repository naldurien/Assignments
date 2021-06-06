import unittest
from employee_raise import Employee 

class EmployeeraiseTests(unittest.TestCase):


    def test_give_default_raise(self):
        tyler = Employee('Tyler', 'Durden', '70000')
        self.assertEqual(tyler.give_raise(), 75000)


    def test_give_custom_raise(self):
        tyler = Employee('Tyler', 'Durder', '70000')   
        self.assertEqual(tyler.give_raise(10000), 80000)




if __name__ == '__main__':
    unittest.main()
