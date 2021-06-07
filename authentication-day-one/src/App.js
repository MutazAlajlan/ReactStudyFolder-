import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Form from './Form.js';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      pic: "",
      token: ""
    }
  }
  
  responseFacebook = (response) => {
     if(response.state != "unknown"){
      console.log(response);

    this.setState({name: response.name,
      email: response.email,
       pic: response.picture.data.url,
      token: response.accessToken
    })
  }
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Form label= "enter your username" type = "text"/>
        <Form label="Enter your password" type = "password" />
        <h2>or login with facebook</h2>
        
        <FacebookLogin
    appId="1776021115902115"
    autoLoad={false}
    fields="name,email,picture"
    callback={this.responseFacebook} />
     {this.state.token ?
    <div>
        <h3>Welcome {this.state.name}</h3> 
        { <img src={this.state.pic} /> }
        <h3>The email {this.state.email}</h3>
       

        </div>
         : null
      }
      </div>
    )
  }
}
