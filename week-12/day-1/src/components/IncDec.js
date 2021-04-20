import {connect} from 'react-redux'
import * as actionCreators from '../store/creators/actionCreators'

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
        onIncrement: () => dispatch(actionCreators.incrementCounter()),
        onDecrement: () => dispatch(actionCreators.decrementCounter())
    }
}



export default connect(null, mapDispatchToProps)(IncDec)
