
import {connect} from 'react-redux'
import * as actionTypes from '../stores/actions/actionTypes'
import '../css/Cart.css'

function Cart(props) {

const removeItem = (title) => {
    props.removeFromCart(title)
} 

const books = props.cart
const cartItems = books.map((book, index) => {
    return <div key={index} class='cart-image'>
        <img src={book.image_url} alt='cover'/><br/>
        <br/> 
        <button class='button' onClick={() => {removeItem(book.title)}}>Remove From Cart</button>
        <br/> <br/> 
    </div>
})

    return (
        <div>
        <h1>Shopping Cart</h1>
        <div className = 'cart-display'>
            {cartItems}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartR.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch({type: actionTypes.REMOVE_FROM_CART, payload: item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)