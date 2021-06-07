import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount(){
    this.callApi();
  }

  callApi() {
    axios({
      method:"get",
      url: "https://pokeapi.co/api/v2/pokemon/ditto"
    }).then((Response) => {
      this.setState({
        data: Response.data
      })
    }).catch( (error) => {
      console.log("error ", error)
    })
  }

  render() {
    return (
      <div>
        <h1>Api App</h1>
        <div>This is a state, {this.state.data.height} </div>
      </div>
    )
  }
}
