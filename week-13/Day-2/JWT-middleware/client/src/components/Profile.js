import { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchMyBooks()
    }, [])

    const fetchMyBooks = () => {
        // const token = localStorage.getItem('jsonwebtoken')
        const username = localStorage.getItem('username')

        axios.get(`http://localhost:8080/my-books/${username}`, {
            // headers: {
            //     'Authorization': `Bearer ${token}`
            // }
        }).then(response => {
            console.log(response.data)
            setBooks(response.data)
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

    const bookItems = books.map((book, index) => {
        return <li key={index}>{book.title} by {book.author}<br/></li>
    })
    return (
        <div>
            <h1>Profile Page</h1>
            <h3>My Books</h3>
            {bookItems}
            {/* <button onClick={() => fetchMyBooks()}>View My Books</button> */}
        </div>
    )
}

export default Profile