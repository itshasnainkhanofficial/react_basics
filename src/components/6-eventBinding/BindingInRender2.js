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
                <button onClick={this.Greet} className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button>
            </div>
        )
    }
}

export default BindingInRender
