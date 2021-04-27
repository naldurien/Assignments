import { useEffect, useState } from 'react'
import axios from 'axios'
import { setAuthenticationHeader } from '../utils/authenticate'
import { connect } from 'react-redux'

function Profile(props) {

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
    
    const bookItems = books.map((book, index) => {
        return <li key={index}>{book.title} by {book.author}<br/><br/></li>
    })

    const signOut = () => {
        localStorage.removeItem('jsonwebtoken')
        localStorage.removeItem('username')
        setAuthenticationHeader(null)
        props.onLogout()
        props.history.push('/')
    }
    return (
        <div>
            <h1>Profile Page</h1>
            <h3>My Books</h3>
            {bookItems}
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch({type: 'ON_LOGOUT'})
    }
}

export default connect(null, mapDispatchToProps)(Profile)