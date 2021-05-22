import React, { Component } from 'react'

export default class ClassGreet extends Component {
    render() {
        const {name , lastname} = this.props;
        // const {state1, state2} = this.state; // syntax for state
        return (
        <div>
            <h1>Hello {name} {lastname}</h1>
        </div>
        )
    }
}
