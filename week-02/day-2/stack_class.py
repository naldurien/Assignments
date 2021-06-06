# Activity - Stack
# "Implement a Stack data structure in Python."
# 
class Stack:
    def __init__(self):
        self.items = []


    def push(self, item):
        self.items.append(item)

    
    def pop(self):
        return self.items.pop()

stack = Stack()

stack.push(3)
stack.push(10)
stack.push(2)
print(stack.pop())
print(stack.pop())
print(stack.pop())
# print(stack.pop()) - this line would cause an error
# because the list is now empty

