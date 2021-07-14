import React, { Component } from 'react'

export default class Classclean extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x : 0,
             y : 0
        }
    }

    LogmousePosition = (e) => {
        this.setState({
            x : e.clientX ,
            y : e.clientY
        })
    }
    
    componentDidMount () {
        window.addEventListener("mousemove" , this.LogmousePosition)
    }
    // componentWillUnmount() {
    //     window.removeEventListener("mousemove" , this.LogmousePosition)
    // }
    render() {
        return (
            <div>
                <h1>X - {this.state.x}</h1>
                <h1>Y - {this.state.y}</h1>
            </div>
        )
    }
}
