import unittest
from employee_raise import Employee 

class EmployeeraiseTests(unittest.TestCase):
    def setUp(self):
        self.employee = Employee('Tyler', 'Durden', '70000')

    def test_does_giving_default_raise_add_5000_to_salary(self):
        self.assertEqual(self.employee.give_raise(), 75000)


    def test_does_giving_custom_raise_add_passed_raise_to_salary(self):
        self.assertEqual(self.employee.give_raise(10000), 80000)




if __name__ == '__main__':
    unittest.main()
