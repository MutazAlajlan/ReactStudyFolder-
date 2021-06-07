import React, { Component } from 'react'
import MoodTracker from './MoodTracker'

export default class App extends Component {


  render() {
    return (
      <div>
        <h1>Tracker App</h1>
        <MoodTracker name={"Bader"} age={14}/>
      </div>
    )
  }
}
