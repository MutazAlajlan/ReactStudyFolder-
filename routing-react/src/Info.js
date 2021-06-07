import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        const {params} = this.props.match;
        return (
            <h1>
                jjnjnjj
                console.log(this.props)
            Information about {/*this.props.match.params.name*/ params.name}
        </h1>
        )
    }
}
