const express = require('express')
const router = express.Router()
const authenticate = require('../authentication/auth') 
const { v4: uuidv4 } = require('uuid')
module.exports = router

router.get('/unique', (req,res) => {
    res.send(uuidv4())
})


// Registration Page Requests
router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let userId = uuidv4()

    if(req.session) {
        req.session.username = username
        req.session.password = password
    }

    let user = {userId: userId, username: username, password: password}

    users.push(user)
    res.redirect('/profile')
})

// Login Page Requests
router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {

    const username = req.body.username 
    const password = req.body.password 

    const persistedUser = users.find((user) => {
        return user.username == username && user.password == password
    })

    if(persistedUser) {
         
        if(req.session) {
            req.session.username = username 
        }

        res.redirect('/profile')

    } else { 
        res.render("login", {message: "Your username or password is incorrect. Please try again."})
    }
})


// View Profile Page 
router.get('/profile', authenticate, (req, res) => {
    const username = req.session.username
    res.render('profile', {username:username, allTrips: trips, totalTrips: trips.length})
})


// Logout
router.get('/logout', function(req, res, next) {
    req.session.destroy()
    res.redirect('/login')
})