import React, { Component } from 'react'
import Car from './Car.js'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCar: false,
    }
  }
toggleCar(){
  this.setState({
    showCar: !this.state.showCar
  })
}

  render() {
    return (
      <div>
        {this.state.showCar?<Car /> : null}
        <button onClick={() => this.toggleCar()}>Show car</button>
      </div>
    )
  }
}

