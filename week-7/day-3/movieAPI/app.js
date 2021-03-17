const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')

const PORT = 3000

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded()) 
app.use("/movies", moviesRouter)


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

app.set('views', './views')

app.set('view engine', 'mustache')

app.listen(PORT, () => {
    console.log('Server is running...')
})