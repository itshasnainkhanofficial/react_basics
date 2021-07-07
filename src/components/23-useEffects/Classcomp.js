import React, { Component } from 'react'

export default class Classcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    componentDidMount(){
        document.title = `You Clicked ${this.state.count} times`
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        
        document.title = `You Clicked ${this.state.count} times`
        console.log("componentDidUpdate")

    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Click</button>
            </div>
        )
    }
}
