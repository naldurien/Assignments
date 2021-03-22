const { mapValuesSeries } = require('async')
const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid')
const pgp = require('pg-promise')() 
const connectionString = 'postgres://localhost:5432/blogdb'
const db = pgp(connectionString)

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.urlencoded())

// GET ALL BLOG POSTS
app.get('/', (req, res) => {
    db.any('SELECT title, body, post_id FROM posts')
    .then(posts => {
        res.render('index', {posts: posts})
    })
})

app.get('/add-post', (req, res) => {
    res.render('add-post')
})


// ADD A POST
app.post('/add-post', (req,res) => {
    const title = req.body.title
    const body = req.body.body
    const isPublished = req.body.isPublished == "on" ? true : false 

    db.none('INSERT INTO posts(title, body, is_published) VALUES($1, $2, $3)',[title, body, isPublished])
    .then(() => {
        res.redirect('/')
    })
})


// DELETE A POST
app.post('/delete-post', (req,res) => {
    const postId = parseInt(req.body.post_id)
    db.none('DELETE FROM posts WHERE post_id = $1;',[postId])
        .then(() => {
            res.redirect('/')
        })
})


// GET UPDATE-POST PAGE
app.get('/update-post/:post_id', (req, res) => {
    const postId = req.params.post_id
db.any('SELECT title, body, post_id FROM posts WHERE post_id = $1;',[postId])
    .then(posts => {
        res.render('update-post', {posts: posts})
    })
})

// UPDATE POST - UPDATES BUT 
app.post('/update-post', (req,res) => {
    let postId = parseInt(req.body.post_id)
    let title = req.body.title
    let body = req.body.body
    
    db.none('UPDATE posts SET title = $1, body = $2 WHERE post_id = $3', [title, body, postId])
    .then(() => {
        res.redirect('/')
    })
})


// START APP 
app.listen(3000,() => {
    console.log('Speak your mind!')
})