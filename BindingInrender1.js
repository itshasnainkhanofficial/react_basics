import React, { Component } from 'react'

class BindingInRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greetMsg : "Hello"
        }
    }
    
    Greet(){
        console.log(this) ; // check this keyword which is undefined
        this.setState({
            greetMsg: "bye"
        })
    }
    render() {
        return (
            <div>
                {this.state.greetMsg}
                {/* binding like this will cause re-ranering problem when any state change */}
                {/* not good for large app or component this have performance problem */}
                <button onClick={this.Greet.bind(this)}>Click</button>
            </div>
        )
    }
}

export default BindingInRender