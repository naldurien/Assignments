let tasks = [
    {id: 1, name: "wash car", priority: "low", date: "03/15/2021"},
    {id: 2, name: "take out trash", priority: "high", date: "03/15/2021"},
    {id: 3, name: "study", priority:"high", date: "03/15/2021"}
]

const express = require ('express')
const app = express()
const cors = require('cors')

app.use(cors()) 
app.use(express.json()) 

app.listen(3000, () => {
    console.log("Server is running...")
})

app.get("/todos", (req, res) => {
    res.send(tasks)
})

app.post("/todos", (req, res) => {

    const name = req.body.name
    const priority = req.body.priority
    const date = req.body.date

    const task = {name: name, priority: priority, date: date}
    tasks.push(task)

    res.json({message: "Task has been added!"})
    // res.send().statusCode(200)
})