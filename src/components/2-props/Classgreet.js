import React, { Component } from 'react'

export class Classgreet extends Component {
    
    render() {
        // this.props.name = "abc"; // this will throw error as props are immutable or read-only
        return (
            <div>
            
            <h1>Hello {this.props.name}, {this.props.question}</h1>
            {this.props.children}

        </div>
        )
    }
}

export default Classgreet
