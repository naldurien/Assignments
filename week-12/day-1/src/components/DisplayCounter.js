import {connect} from 'react-redux'

function DisplayCounter(props) {
  return (
    <div>
    <h1>Counter Built With Redux</h1>
    <h1>{props.ctr}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.count  
  }
}

export default connect(mapStateToProps)(DisplayCounter)