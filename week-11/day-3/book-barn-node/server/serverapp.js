const express = require('express')
const cors = require('cors')
const serverapp = express()
const models = require('./models')

serverapp.use(cors())
serverapp.use(express.json())

let books = [
    {title: 'Mad Ship', author: 'Robin Hobb'},
    {title: 'Banewreaker', author: 'Jacqueline Carey'}
]

serverapp.get('/books', (req, res) => {
    models.Book.findAll({})
    .then(books=> {
        res.json(books)
    })
})

serverapp.post('/books',(req, res) => {
    const title = req.body.title
    const author = req.body.author

    let book = { title:title, author:author}
    books.push(book)
    res.json({success:true, message: 'Book has been added.'})
})

serverapp.post('/add-book',(req, res) => {
    const title = req.body.title
    const author = req.body.author
    const isbn = req.body.isbn
    const genre = req.body.genre
    const publisher = req.body.publisher
    const year = req.body.year
    const imageURL = req.body.imageURL

    let book = models.Book.build({
        title: title, 
        author: author, 
        isbn: isbn,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    })
    book.save().then((savedBook) => {
        res.json({message: 'Book is saved!'})
    })
})

serverapp.listen(8080, () => {
    console.log('Once upon a time...')
})