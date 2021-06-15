import React, { Component } from 'react'
import Childcomp from './Childcomp'

export default class Parentcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname : "parent"
        }
    }
    
    GreetParent = () => {
        console.log(`Hello ${this.state.parentname}`)
    }
    render() {
        return (
            <div>
                <Childcomp GreetHandler={this.GreetParent}/>
            </div>
        )
    }

}
