import React, { Component } from 'react'

class Friends extends Component {
  render() {
      const friendList = this.props.myFriends.map((friend, index) => {
        return <li key={index}>{friend.name}</li>
      })
    return (
      <div><h1>My Friends</h1>
      {friendList}
      </div>
    )
  }
}

export default Friends