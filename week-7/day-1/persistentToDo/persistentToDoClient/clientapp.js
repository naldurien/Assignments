const tasksUL = document.getElementById("tasksUL")
const addTaskButton = document.getElementById("addTaskButton")
const taskNameTextBox = document.getElementById("taskNameTextBox")
const datePicker = document.getElementById("datePicker")
const priorityTextBox = document.getElementById("priorityTextBox")


function getTasks() {
    fetch('http://localhost:3000/todos')
        .then(response => response.json())
        .then(tasks => {
            const taskItems = tasks.map((task) => {
                return `<li>
                        <b>Task: ${task.name}</b><br>
                        <i>Priority: ${task.priority}<i><br>
                        <b>Created On: ${task.date}</b><br><br>
                        </li>`
            })

            tasksUL.innerHTML = taskItems.join("")
        })
}

getTasks() 



addTaskButton.addEventListener("click", function () {
    const taskName = taskNameTextBox.value
    const priority = priorityTextBox.value
    let date = datePicker.value

    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: taskName,
            priority: priority,
            date: date
        })
    }).then(response => response.json())
        .then(result => {
           getTasks() 
        })
})

// Non-functional attempt at deletion
// function deleteTask {
//     fetch('http://localhost:3000/todos/3', {
//         method: 'DELETE'
//     })
// }

// deleteTask()