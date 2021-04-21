const express = require('express')
const cors = require('cors')
const app = express() 
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/bookstoredb'
const db = pgp(connectionString)

app.use(cors())
app.use(express.json())



app.get('/books', (req, res) => {
    db.any('SELECT book_id, title, author, genre, publisher, year, image_url FROM books')
        .then(book => {
            res.json(book)
        })
})

app.post('/add-book', (req, res) => {
    let title = req.body.title
    let author = req.body.author
    let genre = req.body.genre
    let publisher = req.body.publisher 
    let year = req.body.year
    let image_url = req.body.image_url

    db.none('INSERT INTO books(title, author, genre, publisher, year, image_url) VALUES($1, $2, $3, $4, $5, $6)', [title, author, genre, publisher, year, image_url])
        .then(() => {
            res.json({success: true, message: 'Book added successfully!'})
        })
})


app.delete('/delete/:book_id', (req,res)=>{
    const book_id = req.params.book_id
    db.none('DELETE FROM books WHERE book_id = $1', [book_id]) 
        .then(() => {
            res.json({success: true, message: 'Book deleted successfully!'})
        })
})


app.put('/update/:book_id', (req, res) => {
    let book_id = req.params.book_id
    let title = req.body.title
    let author = req.body.author
    let genre = req.body.genre
    let publisher = req.body.publisher 
    let year = req.body.year
    let image_url = req.body.image_url

    db.none('UPDATE books SET title = $1, author = $2, genre = $3, publisher = $4, year = $5, image_url = $6  WHERE book_id = $7;', [title, author, genre, publisher, year, image_url, book_id])
        .then(() => {
            res.json({success: true, message: 'Book updated successfully!'})
        })


})

app.listen(8080, () => {
    console.log('Butterfly in the sky...')
})