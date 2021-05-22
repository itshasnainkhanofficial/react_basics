import React, { Component } from 'react'

export default class OfficialDocApprch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greetMsg : "Hello"
        }

        this.Greet = this.Greet.bind(this);
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
                {/* Official Docs Approach */}
                {/* Because binding happend at once in constructor this is better than binding in render method */}
                <button onClick={this.Greet.bind(this)} className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button>
            </div>
        )
    }
}
