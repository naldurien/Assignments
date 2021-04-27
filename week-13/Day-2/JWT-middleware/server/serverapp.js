const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const authenticate = require('./authMiddleware')
require('dotenv').config()

app.use(cors())
app.use(express.json())

global.users = [{
    username: 'practicalpersonality',
    password: '112358'
}]

const myBooks = [{
    title: 'Mad Ship',
    author: 'Robin Hobb',
    username: 'practicalpersonality'
}, {
    title: 'Starless',
    author: 'Jacqueline Carey',
    username: 'practicalpersonality'
}]

app.get('/token', (req, res) => {
    const token = jwt.sign({username: 'johndoe'}, 'SECRET')
    res.json({token: token})
})

app.get('/my-books/:username', authenticate, (req, res) => {
    const username = req.params.username
    const userBooks = myBooks.filter(book => book.username == username)
    res.json(userBooks)
})



app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let authUser = users.find((user) => user.username == username && user.password == password)
    if(authUser) {
        const token = jwt.sign({username: username}, process.env.JWT_KEY)
      res.json({success: true, token: token, username: username});
    } else {
      res.json({success:false});
    }
})

app.listen(8080, () => {
    console.log('Server is running...')
})