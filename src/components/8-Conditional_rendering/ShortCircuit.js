import React, { Component } from 'react'

export default class ShortCircuit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsloggedIn : false
        }
    }
    
    render() {
        return (
            // short circuit for something or nothing logic
                this.state.IsloggedIn && <div>Welcome Student</div>

           
        )
    }
}
