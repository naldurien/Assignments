# 02/16/21 Algorithm Challenges
# Challenge 3: Create a Teacher object and a Student object. The Teacher object should have the property ‘class’, a list built of Student objects, a function on the Teacher object that allows it to print the grade property of any Student.

# Challenge 3.5: On the Student object, create a function that allows a student to greet his teacher.


class Teacher:
    def __init__(self, name):
        self.name = name
        self.classroom = []
    
    def add_to_classroom(self, student):
        self.classroom.append(student)
    
    def print_grade(self, student):
        for index in self.classroom:
            if index == student:
                print(f"{student.name}'s grade is {student.grade}.")


class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def greet_teacher(self, teacher):
        print(f"Hello, {teacher.name}!")

s1 = Student("Bob", "B")
s2 = Student("Alice", "A")
t1 = Teacher("Azam")

t1.add_to_classroom(s1)
t1.add_to_classroom(s2)

t1.print_grade(s1)
s1.greet_teacher(t1)
