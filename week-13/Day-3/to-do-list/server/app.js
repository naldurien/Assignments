const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Task = require('./models/task')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb+srv://DBtestuser:DBtestuser@cluster0.nijve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewURLParser: true, useUnifiedTopology: true}, (error) => {
    if(!error) {
        console.log('Successfully connected to DB...')
    } else {
        console.log(error)
    }
})

app.get('/', (req, res) => {
    //get all tasks
    Task.find()
    .then((result) => {
        res.json(result)
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/add-task', (req, res) => {
    // const taskName = req.body.taskName
    // const taskPriority = req.body.taskPriority
    
    const task = new Task({
        taskName: 'fold clothes',
        taskPriority: 'low'
    })

    task.save()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
        })
})

app.get('/all-tasks', (req, res) => {
    Task.find()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
    })
})

app.get('/single-task', (req, res) => {
    Task.findById('608989b94772320ad0e036d2')
    .then((result) => {
        res.send(result)
    })
})


app.listen(8080, (req, res) => {
    console.log('Server is running...')
})