import React, { Component } from 'react'

class ClassEvent extends Component {
    myfanc() { // don't use keyword function in class component
        console.log("button clicked")
    }
    render() {
        return (
            <div>
                {/* access function using this and dont use paranthesis */}
                 <button onClick={this.myfanc}>Click</button> 
            </div>
        )
    }
}

export default ClassEvent
