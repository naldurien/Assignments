import { connect } from 'react-redux'
import { useState } from 'react'

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
            <input type="text" onChange = {handleOnChange} /><br/>
            <button onClick = {handleAdd}>ADD</button>
            <button onClick = {handleSubtract}>SUBTRACT</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => dispatch({type: 'ADD', payload: value}),
        onSubtract: (value) => dispatch({type: 'SUBTRACT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSubtract) 
