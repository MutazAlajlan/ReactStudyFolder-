import React, { Component } from 'react'

export default class FunClass extends Component {
    render() {
        let list = this.props.names.map((name) => <li>{name}</li>)
        return (
            <div>
                <h2 className="test">I'm ClassFunc</h2>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}
