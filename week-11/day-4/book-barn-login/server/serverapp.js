const express = require('express')
const serverapp = express()
const cors = require('cors')
const models = require('./models')

serverapp.use(cors())
serverapp.use(express.json())

const books = [
  {title: 'Mad Ship', author: 'Robin Hobb', imageURL: 'https://upload.wikimedia.org/wikipedia/en/8/87/Robin_Hobb_-_The_Mad_Ship_Cover.jpg'},
  {title: 'The Eye of the World', author: 'Robert Jordan', imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/00/WoT01_TheEyeOfTheWorld.jpg'}
  ]

// GET HARD-CODED LIST
// serverapp.get('/books', (req, res) => {
//   res.json(books)
// })

// GET FROM POSTGRES DB
serverapp.get('/books', (req, res) => {
  models.Book.findAll({})
  .then(books => {
    res.json(books)
  })
})


// POST WITH NO PERSISTENCE
// serverapp.post('/books', (req, res) => {

//   const title = req.body.title 
//   const author = req.body.author
//   const imageURL = req.body.imageURL 

//   let book = {title: title, author: author, imageURL: imageURL}
//   books.push(book)

//   res.json({success: true, message: 'Book has been added!'})
// })

// POST TO POSTGRES SERVER
serverapp.post('/books', (req, res) => {
  const title = req.body.title 
  const author = req.body.author
  const imageURL = req.body.imageURL 

  let book = models.Book.build({
    title: title, 
    author: author, 
    imageURL: imageURL
  })

  book.save().then((savedBook) => {
    console.log(savedBook)
    res.json({message: 'Book is saved!'})
  })
})

serverapp.listen(8000, () => {
  console.log('Once upon a time...')
})
