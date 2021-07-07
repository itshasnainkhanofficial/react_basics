// Before hooks if we want to work on state , we have to convert 
// a functional component to a class compoent because functional component
// was not made to change states

import React, { Component } from 'react'

export default class Stateinclass extends Component {
    // must include props in constructor to access them
    // wrong way
    // constructor() {
    //     super()
    //     this.state = {
    //          count : 0
    //     }
    //     console.log(this.props);
    // }
    // correct way

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //          count : 0
    //     }
    //     console.log(this.props);
    // }


    constructor(props) {
        super(props)
        this.state = {
             count : 0
        }
        console.log(this.props);
    }

    // increment = () => {
    //     this.setState({
    //         count : this.state.count + 1 // wrong way to modify previous state
    //     })
    // }
   
    increment = () => {
        this.setState((pre) => ({
            
            count : pre.count + 1 // //  correct way to modify previous state 

        }))
    }

    
    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <div>{this.state.count}</div>
                <div><button className="btn btn-primary" onClick={this.increment}>Increment</button></div>
            </div>
        )
    }
}
