import React, { Component } from 'react'

class BasicArticle extends Component {
  render() {
    return (
        <div className="BasicArticle">
            <h3 className="BasicArticle-title">{this.props.title}</h3>
            <p>{this.props.body}</p>
            <div className="BasicArticle-commentbar">
                <p>{this.props.comments} comments</p>
                <p>{this.props.likes} likes</p>
            </div>
        </div>
    )
  }
}

export default BasicArticle