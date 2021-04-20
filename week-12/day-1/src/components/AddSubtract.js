import { connect } from 'react-redux'
import { useState } from 'react'
import * as actionCreators from '../store/creators/actionCreators'

function AddSubtract(props) {

    const [value, setValue] = useState(0)

    const handleOnChange = (e) => {
        setValue(parseInt(e.target.value))
    }

    const handleAdd = () => {
        props.onAdd(value)
    }

    const handleSubtract = () => {
        props.onSubtract(value)
    }

    return (
        <div>
            <input type="text" onChange = {handleOnChange} id="textbox"/><br/>
            <button onClick = {handleAdd}>ADD</button>
            <button onClick = {handleSubtract}>SUBTRACT</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch(actionCreators.addToCounter(value)),
        onSubtract: (value) => dispatch(actionCreators.subtractFromCounter(value))
    }
}

export default connect(null, mapDispatchToProps)(AddSubtract)
