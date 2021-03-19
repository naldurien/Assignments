const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid')
const session = require('express-session')
const authenticate = require('./authentication/auth')
const tripsRouter = require('./routes/trips')
const indexRouter = require('./routes/index')
const http = require('http').Server(app)
const io = require('socket.io')(http)
global.connectCounter = 0
    
// part of currently non-functional attempt to get history showing
global.chats = []

app.engine('mustache', mustacheExpress())
app.use(express.urlencoded()) 
// use css and client.js file
app.use(express.static('static'))

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


// Index Requests All Moved To Index Router (Except Home Page), Trip Requests to Trip Router 



// Chat Functionality Below

// Give client access to socket, facilitate counter of current users
io.on('connection', (socket) => {
    console.log('User connected!')
    connectCounter++
    console.log("Current connections: " + connectCounter)

    socket.on('disconnect', () => {
      console.log('User disconnected!')
      connectCounter--
      console.log("Current connections: " + connectCounter)
    })

// Let server listen for messages from socket and then forward client message out to all clients
socket.on('Houston', (chat) => {
// attempt to get history showing
chats.push(chat)
console.log(chats)
io.emit('Houston', chat)
})
})




http.listen(5000, () => {
    console.log('Server is running...')
})