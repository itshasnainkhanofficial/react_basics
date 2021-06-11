import React, { Component } from 'react'

export default class ArrowFuncInRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greetMsg : "Hello"
        }
    }
    
    Greet(){
        console.log(this)
        this.setState({
            greetMsg: "bye"
        })
    }
    render() {
        return (
            <div>
                {this.state.greetMsg}
                    {/* this also have performance problem */}
                <button onClick={() => this.Greet()} className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button>
                
            </div>
        )
    }
}