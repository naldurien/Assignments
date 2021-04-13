import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <h1 className="Menu-title">BookBarn</h1>
        <h2 className="Menu-links">Home</h2>
        <h2 className="Menu-links">Browse</h2>
        <h2 className="Menu-links">Community</h2>
        <h2 className="Menu-links">Language</h2>
      </div>
    )
  }
}

export default Menu