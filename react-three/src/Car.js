import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            speed: props.speed || 0,
            speed2: 1000,
            carName: "Ford",
        }
        this.increaseSpeed = this.increaseSpeed.bind(this)
        this.decreaseSpeed = this.decreaseSpeed.bind(this)
    }

    componentDidMount(){
       window.setTimeout(this.increaseSpeed, 1000)
       window.setTimeout(this.decreaseSpeed, 1000)
    }

    shouldComponentUpdate(){
        //returns bool value
        if(this.state.speed > 20) {
            return false;

        }
        else {
            return true;
        }
      
    }

    componentWillUnmount(){
        alert("UNMOUNTED!!!!")
    }

    increaseSpeed(){
        this.setState({
            speed: this.state.speed + 1});

        window.setTimeout(this.increaseSpeed, 1000)
    }

    decreaseSpeed(){
        this.setState({
            speed2: this.state.speed2 - 100});
            if(this.state.speed2 > 0){
            window.setTimeout(this.decreaseSpeed, 1000)}

    }
    ChangeCarName(){
        this.setState({
            carName: "Toyota"
        })
    }
    render() {
        return (
            <div>
                <div>Your speed is: {this.state.speed}</div>
                <p>Your decrease speed is: {this.state.speed2}</p>
                <h1>{this.state.carName}</h1>
                <button onClick={()=> this.ChangeCarName()}>Change my name</button>
            </div>
        )
    }
}
