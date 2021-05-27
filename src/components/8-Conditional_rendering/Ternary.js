import React, { Component } from 'react'

export default class Ternary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsloggedIn : false
        }
    }
    
    render() {
        return (
            
            this.state.IsloggedIn ?   
            <div>Welcome Student</div> :
            <div>Welcome Guest</div> 

       
    )
        

           
        
    }
}
