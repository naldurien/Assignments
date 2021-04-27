import './App.css';
import { Component } from 'react'
// import { render } from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    if('geolocation' in navigator) {
      console.log('available')
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position)
      })
    } else {
      console.log('not available')
    }
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('Latitude: ', position.coords.latitude)
      console.log('Longitude: ', position.coords.longitude)
      console.log(position)
    }, function(error) {
      console.error('error code = ' + error.code + ' - ' + error.message)
    })
  }

  render() {
    return (
      <div>
        <h4>--Using geolocation JS API in React--</h4>
      </div>
    )
  }
}
// render(<App/>, document.getElementById('root'))

export default App;
