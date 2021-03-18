const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid')
const session = require('express-session')
const authenticate = require('./authentication/auth')
const tripsRouter = require('./routes/trips')
const indexRouter = require('./routes/index')

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded()) 
app.use(express.static("css"))

app.get('/unique', (req,res) => {
    res.send(uuidv4())
})

app.use(session({
    secret: 'THISISSECRETKEYBLAHBLAHYADAYADA',
    saveUninitialized: true
}))

app.use("/trips", tripsRouter)
app.use("/", indexRouter)

global.trips = [
    {tripId: "51b6a705-8a2a-4ea6-8ea7-94706454a6fa", 
    destination: "Orlando", 
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/08/Magic_Kingdom_-_Cinderella_Castle_panorama_-_by_mrkathika.jpg", 
    departureDate: "2021-06-12", 
    returnDate: "2021-06-19"}
]

global.users = [
    {userId: "2c67229b-c2f3-463f-a85f-3929d9b0df97",
    username: "consultingdetective",
    password: 31415926}
]

app.set('views', './views')

app.set('view engine', 'mustache')

// Index Requests All Moved To Index Router, Trip Requests to Trip Router 


app.listen(3000, () => {
    console.log('Server is running...')
})