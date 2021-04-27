const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const authenticate = require('./authMiddleware')

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

// OLD PRE-MIDDLEWARE VERSION
// app.get('/my-books/:username', (req, res) => {
//     let headers = req.headers['authorization']
//     if(headers) {
//         const token = headers.split(' ')[1]
//         // const token1 = headers
//         const decoded = jwt.verify(token, 'MYSECRET27')
//         if(decoded) {
//             const username = decoded.username 
//             const authUser = users.find(user => user.username == username)
//             if(authUser) {
//                 const userBooks = myBooks.filter(book => book.username == username)
//                 res.json(userBooks)
//             } else {
//                 res.json({error: 'Unable to authenticate'})
//             }
//         } else {
//             res.json({error: 'Unable to authenticate'})
//         }
//     } else {
//         res.json({error: 'Required headers are missing...'})
//     }  
// })

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