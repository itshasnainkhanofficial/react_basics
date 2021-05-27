import React, { Component } from 'react'

export default class IfElese extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             IsLoggedIn : true
        }
    }
    
    render() {
        
        // return (
        //     <div>
                
        //     </div>
        // )
        

        if(this.state.IsLoggedIn){
            return (
                <div>Hello Student</div>
            )
        }
        else{
            return (
                <div>Hello Guest</div>
            )
        }

        // if/else not work inside jsx

        // don't do like this
        // return(
        //     if(this.state.IsLoggedIn){
        //          <div>Hello Student</div>
        //     }
        //     else{
        //         div>Hello Guest</div>
        //     }
        // )
        
    }
}
