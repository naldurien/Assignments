import {connect} from 'react-redux'

function DisplayCounter(props) {
  return (
    <div>
    <h2>Counter Built With Redux</h2>
    <h2>{props.ctr}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.count
  }
}

export default connect(mapStateToProps)(DisplayCounter)
