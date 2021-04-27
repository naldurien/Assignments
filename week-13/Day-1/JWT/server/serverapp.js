const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const users = [{
    username: 'armydoc',
    password: '112358'
}]

const myBooks = [{
    title: 'Mad Ship',
    author: 'Robin Hobb',
    username: 'armydoc'
}, {
    title: 'Starless',
    author: 'Jacqueline Carey',
    username: 'armydoc'
}]

app.get('/token', (req, res) => {
    const token = jwt.sign({username: 'johndoe'}, 'SECRET')
    res.json({token: token})
})

app.get('/my-books/:username', (req, res) => {
    let headers = req.headers['authorization']
    if(headers) {
        const token = headers.split(' ')[1]
        const token1 = headers
        const decoded = jwt.verify(token, 'MYSECRET27')
        if(decoded) {
            const username = decoded.username 
            const authUser = users.find(user => user.username == username)
            if(authUser) {
                const userBooks = myBooks.filter(book => book.username == username)
                res.json(userBooks)
            } else {
                res.json({error: 'Unable to authenticate'})
            }
        } else {
            res.json({error: 'Unable to authenticate'})
        }
    } else {
        res.json({error: 'Required headers are missing...'})
    }  
})

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let authUser = users.find((user) => user.username == username && user.password == password)
    if(authUser) {
        const token = jwt.sign({username: username}, 'MYSECRET27')
      res.json({success: true, token: token, username: username});
    } else {
      res.json({success:false});
    }
})

app.listen(8080, () => {
    console.log('Server is running...')
})