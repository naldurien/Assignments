const { mapValuesSeries } = require('async')
const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid')
const pgp = require('pg-promise')() 
const connectionString = 'postgres://localhost:5432/blogdb'
const db = pgp(connectionString)
const session = require('express-session')
const authenticate = require('./authentication/auth')
const bcrypt = require('bcryptjs')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())
app.use(express.static('static'))
app.use(session({
    secret: 'THISISSECRETKEYBLAHBLAHYADAYADA',
    saveUninitialized: true,
    resave: false
}))

// Home Page Request
app.get('/', (req, res) => {
    res.render('index')
})

// Show All Posts From DB
app.get('/all-posts', authenticate, (req, res) => {
    let username = req.session.username
    db.any('SELECT title, body, post_id FROM posts')
        .then(posts => {
            res.render('all-posts', {posts: posts, username: username})
        })
})

// Get Registration Page 
app.get('/register', (req, res) => {
    res.render('register')
})

// Let Users Register
app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash(password, salt, function (error, hash) {
            // if there is no error 
            if (!error) {
                db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hash])
                    .then(() => {
                        res.render('index')
                    })
            }
        })
    })
})


// Let Users Login
app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.one('SELECT user_id, username, password FROM users WHERE username = $1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function (error, result) {
                if (result) {
                    if(req.session) {
                        req.session.userId = user.user_id 
                        req.session.username = user.username 
                        res.redirect('/my-blog')
                    }
                } else {
                    res.send('Invalid password or username; please try again.')
                }
            })
        }).catch((error) => {
            console.log(error)
            res.send('Invalid password or username; please try again.')
        })
})


// User Profile Page
app.get('/my-blog', authenticate, (req, res) => {
    const username = req.session.username
    db.any('SELECT post_id, title, body FROM posts WHERE user_id = $1', [req.session.userId])
        .then(posts => {
            res.render('my-blog', {posts: posts, username: username})
        })
})


// ADD A POST
app.post('/add-post', (req,res) => {
    const title = req.body.title
    const body = req.body.body
    const isPublished = req.body.isPublished == "on" ? true : false

    db.none('INSERT INTO posts(title, body, is_published, user_id) VALUES($1, $2, $3, $4)',[title, body, isPublished, req.session.userId])
    .then(() => {
        res.redirect('my-blog')
    })
})


// DELETE A POST
app.post('/delete-post', (req,res) => {
    const postId = parseInt(req.body.post_id)
    db.none('DELETE FROM posts WHERE post_id = $1;',[postId])
        .then(() => {
            res.redirect('my-blog')
        })
})


// UPDATE A POST
app.get('/update-post/:post_id', (req, res) => {
    const postId = req.params.post_id
db.any('SELECT title, body, post_id FROM posts WHERE post_id = $1;',[postId])
    .then(posts => {
        res.render('update-post', {posts: posts})
    })
})

app.post('/update-post', (req,res) => {
    let postId = parseInt(req.body.post_id)
    let title = req.body.title
    let body = req.body.body
    
    db.none('UPDATE posts SET title = $1, body = $2 WHERE post_id = $3', [title, body, postId])
    .then(() => {
        res.redirect('my-blog')
    })
})


// LOG OUT
app.get('/logout', function(req, res, next) {
    req.session.destroy()
    res.redirect('/')
})

// START APP 
app.listen(3000,() => {
    console.log('Server is running...')
})