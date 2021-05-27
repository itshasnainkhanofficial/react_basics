import React, { Component } from 'react'

export default class ElementVariables extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn : true
        }
    }
    render() {
        let message;

        if(this.state.IsLoggedIn){
            message = <div>Hello Student</div>
        }
        else{
            message = <div>Hello Guest</div>
        }
        return <div>{message}</div>
            
        
    }
}
