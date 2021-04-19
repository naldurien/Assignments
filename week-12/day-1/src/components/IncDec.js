import {connect} from 'react-redux'

function IncDec(props) {

  const handleIncrement = () => {
    props.onIncrement()
  }

  const handleDecrement = () => {
    props.onDecrement()
  }

  return (
    <div>
    <h1>{props.ctr}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button><br /><br />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INCREMENT'}),
        onDecrement: () => dispatch({type: 'DECREMENT'})
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.count
    }
}

export default connect(null, mapDispatchToProps)(IncDec)