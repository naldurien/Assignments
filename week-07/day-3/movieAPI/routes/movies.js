const express = require('express')
const router = express.Router()

const { v4: uuidv4 } = require('uuid')

// makes router available for export
module.exports = router 

// provides ID numbers
router.get('/unique', (req,res) => {
    res.send(uuidv4())
})

// localhost:3000/movies
// displays all the movies
router.get("/", (req, res) => {
    res.render("index", {allMovies: movies, totalMovies: movies.length})
})


// localhost:3000/movies/create
// add a movie

router.post('/create', (req, res) => {
    
    const title = req.body.title 
    const description = req.body.description
    const genre = req.body.genre
    const posterURL = req.body.posterURL
    const movieId = uuidv4()

    let movie = {movieId: movieId, title: title, description: description, genre: genre, posterURL: posterURL}

    movies.push(movie)
    
    res.redirect("/movies")
    
})

// localhost:3000/movies/delete
// delete a movie

router.post('/delete', (req, res) => {
    
    const movieId = req.body.movieId 
    
    movies = movies.filter((movie) => {
        return movie.movieId != movieId
    }) 
    
    res.redirect("/movies")
    
})


// expose API
router.get('/api/movies', (req, res) => {
    res.json(movies)
})


// NOTHING BELOW IS CURRENTLY WORKING...

// localhost:3000/movies/update
// update a movie
// router.post('/update', (req, res) => {
    
//     const movieId = req.body.movieId 
    
//     movies = movies.filter((movie) => {
//         return movie.movieId != movieId
//     }) 
    
//     res.redirect("/movies")
    
// })

// localhost:3000/movies/movie-details/:movieId
// go to Movie Details page for a film

// router.get('/:movieId', (req, res) = {
//     const movieId = req.params.movieId
//      const chosenMovie = movies.find((movie) => movie.movieId == movieId)
//     console.log(movie)
//     res.render("movie-details", {selection: chosenMovie})
// })


// localhost:3000/movies/genre/:genre
// filter movies by genre

// router.get('/genre/:genre', (req, res) => {
//     const genre = req.params.genre 
//     console.log(genre)
//     const filtered = movies.find((movie) => movie.genre == genre) 
//     console.log(filtered)
//     res.render("genre", {filteredMovies: filtered})
// })
