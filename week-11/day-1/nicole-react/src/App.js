import React, { Component } from 'react'
import Menu from './Menu'
import Friends from "./Friends"
import './App.css'
import './Menu.css'
import './FeaturedArticle.css'
import './BasicArticle.css'
import FeaturedArticle from './FeaturedArticle'
import BasicArticle from './BasicArticle'

class App extends Component {
  render() {
    const friends = [
      {name: "Marty Wells"},
      {name: "Whitney Snipes"},
      {name: "Bersi Ghebremariam"}
    ]
    return (
      <div>
      <Menu />
      <FeaturedArticle />
      <BasicArticle title = "Hello WatchKit" body="Last month Apple released the anticipated WatchKit Framework...lorem ipsum blah blah..." comments="12" likes = "124" />
      <BasicArticle title = "Introduction to Swift" body="Swift is a modern programming language developed by Apple to create the next generation...lorem ipsum blah blah..." comments="15" likes = "45" />

      {/* <Friends myFriends = {friends} /> */}
      </div>
    )
  }
}

export default App