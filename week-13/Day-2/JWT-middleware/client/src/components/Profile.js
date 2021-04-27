import { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchMyBooks()
    }, [])

    const fetchMyBooks = () => {
        const token = localStorage.getItem('jsonwebtoken')
        const username = localStorage.getItem('username')

        axios.get(`http://localhost:8080/my-books/${username}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data)
        })
    }
    
    // const fetchMyBooks = () => {
    //     const token = localStorage.getItem('jsonwebtoken')
    //     const username = localStorage.getItem('username')
    //     fetch(`http://localhost:8080/my-books/${username}`, {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(books => {
    //         setBooks(books)
    //     })
    // }

    const bookItems = books.map((book) => {
        return <div>{book.title} by {book.author}</div>
    })
    return (
        <div>
            <h1>Profile Page</h1>
            {bookItems}
            <button onClick={() => fetchMyBooks()}>View My Books</button>
        </div>
    )
}

export default Profile