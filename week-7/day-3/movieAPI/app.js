const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const session = require('express-session')

app.use(session({
    secret: 'THISISSECRETKEY',
    saveUninitialized: true
}))


const moviesRouter = require('./routes/movies')

const PORT = 3000

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded()) 
app.use("/movies", moviesRouter)

app.set('views', './views')

app.set('view engine', 'mustache')

app.listen(PORT, () => {
    console.log('Server is running...')
})

global.movies = [
    {title: "The Princess Bride",
     description: "While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles, enemies and allies in his quest to be reunited with his true love.",
     genre: "Fantasy",
     posterURL: "https://upload.wikimedia.org/wikipedia/en/d/db/Princess_bride.jpg"},
     {title: "Blazing Saddles",
     description: "In order to ruin a western town, a corrupt politician appoints a black Sheriff, who promptly becomes his most formidable adversary.",
     genre: "Comedy",
     posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7b/Blazing_saddles_movie_poster.jpg"}
     
]

global.users = [
    {username: 'Sherlock Holmes', password: '31415926', age: 39}, 
    {username: 'John Watson', password: '121057', age: 42}
]

app.get('/register', (req, res) => {
    res.render('register')
})


app.post('/register', (req, res) => {

    const username = req.body.username 
    const age = req.body.age
    const password = req.body.password 

    const persistedUser = users.find((user) => {
        return user.username == username && user.password == password
    })


    if(persistedUser) {
        if(req.session) {
            req.session.username = username 
            req.session.age = age
        }
 
        res.redirect('/confirm')

    } else { 
        res.render("register", {message: "Your username or password is incorrect!"})
    }
})

app.get('/confirm', (req, res) => {

    const username = req.session.username 
    const age = req.session.age
    res.render('confirm', {username: username, age: age})
})