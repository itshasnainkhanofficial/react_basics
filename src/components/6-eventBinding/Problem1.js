import React, { Component } from 'react'

export default class Problem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greetMsg : "hello"
        }
    }

    Greet(){
        this.setState({
            greetMsg : "bye"
        })
    }
    
    render() {
        return (
            <div>
                {this.state.greetMsg}
                <button onClick={this.Greet} className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button> 
                {/* will through error Cannot read property 'setState' of undefined */}
            </div>
        )
    }
}
