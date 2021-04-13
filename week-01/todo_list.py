task_list = []
title = "Title"
priority = "Priority"

def prompt_menu():
    selection = input("""
    Press 1 to add a task.

    Press 2 to delete a task.

    Press 3 to view all tasks.

    Press q to quit.

    Your selection: """)
    return selection


def view_tasks():
    global task_list
    print("\n******* TASK LIST *******")
    for task in task_list:
        index = task_list.index(task)
        print(str(index+1) + " - " + task.get("Title") + " - " + task.get("Priority"))


def add_task():
    global task_list
    title_val = input("Task name: ")
    priority_val = input("Priority (high/med/low): ")
    new_task = {}
    new_task[title] = title_val
    new_task[priority] = priority_val
    task_list.append(new_task)
    view_tasks()


def del_task():
    global task_list
    view_tasks()
    del_select = int(input("Enter the task number you wish to delete: "))
    task_list.pop(del_select-1)
    view_tasks()


if __name__ == "__main__":
    while True:
        user_action = prompt_menu()
        if user_action == "1":
            add_task()
        elif user_action == "2":
            del_task()
        elif user_action == "3":
            view_tasks()
        elif user_action != "q":
            print("\nPlease select an action or press q to quit.\n")
        elif user_action == "q":
            print("\nGoodbye!\n")
            exit()
