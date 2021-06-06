const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid')
app.engine('mustache', mustacheExpress())
app.use(express.urlencoded()) 
app.get('/unique', (req,res) => {
    res.send(uuidv4())
})

let trips = [{tripId: "51b6a705-8a2a-4ea6-8ea7-94706454a6fa", destination: "Orlando", imageURL: "https://upload.wikimedia.org/wikipedia/commons/0/08/Magic_Kingdom_-_Cinderella_Castle_panorama_-_by_mrkathika.jpg", departureDate: "2021-06-12", returnDate: "2021-06-19"}]

app.set('views', './views')

app.set('view engine', 'mustache')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/add-trip', (req, res) => {
    res.render('add-trip', {allTrips: trips, totalTrips: trips.length})
})

app.post('/add-trip', (req, res) => {
    
    const destination = req.body.destination 
    const imageURL = req.body.imageURL
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate

    let trip = {tripId: uuidv4(), destination: destination, imageURL: imageURL, departureDate: departureDate, returnDate, returnDate}

    trips.push(trip)
    
    res.redirect("/add-trip")
    
})

app.get('/delete-trip', (req, res) => {
    res.render('delete-trip', {allTrips: trips, totalTrips: trips.length})
})

app.post("/delete-trip", (req, res) => {
  const tripId = req.body.tripId
  trips = trips.filter(trip => trip.tripId != tripId)
  console.log(trips)
  res.redirect("/add-trip")
})

app.listen(3000, () => {
    console.log('Server is running...')
})