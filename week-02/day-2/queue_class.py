# Activity - Queue
# Implement a Queue data structure in Python.

class Queue:
    def __init__(self):
        self.items = []
        
    def enqueue(self, item):
        self.items.insert(0, item)

    def dequeue(self):
        return self.items.pop()

queue = Queue()

queue.enqueue(10)
queue.enqueue(12)
queue.enqueue(45)
print(queue.dequeue())
print(queue.dequeue())
print(queue.dequeue())
# print(queue.dequeue()) - this line would cause an 
# error because the list is now empty
