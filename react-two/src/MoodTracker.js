import React, { Component } from 'react'
import Off from './Off' 
import On from './On' 



export default class MoodTracker extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          moodPoints: 1,
          anotherValue: "value",
          isToggleOn: true
        }
    }

    increaseMood(event)
    {
        this.setState({
            moodPoints: this.state.moodPoints + 1,
            anotherValue: "State has been changed."
        })
    }
    buttonToggle(event) {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <div>
                <div>this is {this.state.moodPoints}</div>
                <div>
                    {this.state.anotherValue }
                </div>
                {this.props.name}
                <button onClick={(event) => this.increaseMood(event)}>Change my mood</button>



                <button onClick={(event) => this.buttonToggle(event)}>Toggle</button>


                {
                    (this.state.isToggleOn) ? <On/> : <Off/> 
                }

            </div>
        )
    }
}
