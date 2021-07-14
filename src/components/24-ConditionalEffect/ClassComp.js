import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             name : ""
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
        // note in console componentDidUpdate is loggin which means title is updating althogh we don't want
        //  it to update because the counter is not changing.
        document.title = `You Clicked ${this.state.count} times`

        console.log("componentDidUpdate")
    }

    // // now to fix this we will pass arguments to to componentDidUpdate
    // componentDidUpdate(prevProps , previousState){
    //     // now console will log and title will only be changed when the counter value is new
    //    if(previousState.count !== this.state.count){

    //     document.title = `You Clicked ${this.state.count} times`
    //     console.log("componentDidUpdate")

    // }
    // }

    ChangeText(e){
        this.setState({
            name : e.target.value
        })
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <h2>{this.state.name}</h2>
                <input type="text" onChange={ (e) => this.ChangeText(e)} />
                <button onClick={this.increment}>Click</button>
            </div>
        )
    }
}
