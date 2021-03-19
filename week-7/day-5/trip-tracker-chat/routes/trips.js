const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

module.exports = router


router.get('/unique', (req,res) => {
    res.send(uuidv4())
})

// Trip-Related Requests

router.post('/add-trip', (req, res) => {
    
    const destination = req.body.destination 
    const imageURL = req.body.imageURL
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate

    let trip = {tripId: uuidv4(), destination: destination, imageURL: imageURL, departureDate: departureDate, returnDate, returnDate}

    trips.push(trip)
    
    res.redirect("/profile")
    
})

router.post("/delete-trip", (req, res) => {
    const tripId = req.body.tripId
    trips = trips.filter(trip => trip.tripId != tripId)
    res.redirect("/profile")
  })

router.get("/update/:tripId", (req,res) => {
    const tripId = req.params.tripId
    res.render("update-trip", {tripId: tripId})
})