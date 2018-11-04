import React, { Component } from 'react'

class Fave extends Component {
  handleClick(event) {
    console.log('clicked the button')
  }
  
  render() {
    return (
      <div className="film-row-fave add_to_queue">
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave;