const PORT = 3000
const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const models = require('./models')
const { Op } = require('sequelize')

app.use(express.static('static'))
app.engine('mustache', mustacheExpress())
app.use(express.urlencoded()) 
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(session({
    secret: 'THISISSECRETKEY',
    saveUninitialized: true
}))


// DISPLAY ALL MOVIES WITH SEQUELIZE
app.get("/", (req, res) => {
    models.Movie.findAll({})
    .then(movies =>
        res.render("index", {allMovies: movies, totalMovies: movies.length})
    )
})


// ADD A MOVIE WITH SEQUELIZE
app.post('/add-movie', (req, res) => {
    const title = req.body.title 
    const rating = parseInt(req.body.rating)
    const director = req.body.director
    const genre = req.body.genre

    let movie = models.Movie.build({
        title: title,
        rating: rating,
        director: director,
        genre: genre
    })
    movie.save()
    res.redirect('/')
})


// UPDATE A MOVIE WITH SEQUELIZE
app.get('/update/:movieId', (req, res) => {
    const movieId = req.params.movieId
    models.Movie.findByPk(movieId)
    .then((movie) => {
        res.render('update', {movie: movie})
    })
})

app.post('/update', (req, res) => {
    const movieId = req.body.movieId
    console.log(movieId)
    const title = req.body.title
    const rating = req.body.rating
    const director = req.body.director
    const genre = req.body.genre

    models.Movie.update ({
        title: title,
        director: director,
        rating: rating,
        genre: genre
    }, {
        where: {
            id: movieId
        }
    }).then(updatedMovie => {
        res.redirect('/')
    })
})    


// DELETE A MOVIE WITH SEQUELIZE
app.post('/delete', (req, res) => {
    const movieId = req.body.movieId
    models.Movie.destroy({
        where: {
            id: movieId
        }
    }).then(deletedMovie => {
        console.log('Movie has been deleted!')
        res.redirect('/')
    })
})


// DISPLAY TOP MOVIES WITH SEQUELIZE
app.get('/best-of', (req, res) => { 
    models.Movie.findAll({
        where: {
            rating: {
                [Op.gt]: 8
            }
        }
    }).then(movies => {
        res.render('best-of', {movies: movies})
    })
})



// DISPLAY MOVIES BY GENRE WITH SEQUELIZE - NONFUNCTIONAL

app.get("/genre", (req, res) => {
    res.render("genre")
})


app.post('genre', (req, res) => {
    const chosenGenre = req.body.genre
    console.log(chosenGenre)
    models.Movie.findAll({
        where: {
            genre: chosenGenre
        }
    }).then(movies => {
        res.render('genre', {filteredMovies: movies})
    })
})



// EXPOSE API
app.get('/api/movies', (req, res) => {
    res.json(movies)
})

// OLD USER REGISTRATION/LOGIN STUFF
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

app.listen(PORT, () => {
    console.log('Lights, camera, ACTION!')
})