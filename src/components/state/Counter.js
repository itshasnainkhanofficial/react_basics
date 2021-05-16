import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    // incremaent(){
    //     // the following code snippets throw error Do not mutate state directly. Use setState()
    //     // while in the browser the value will not change but in console there will be increment
    //     // in this way ui does not re-render that's why Ui not changing
    //     // we can only use this.state in constructor other than setState method is used
    //      // so don't modify state directly
    //     this.state.count = this.state.count + 1; 
    //     console.log(this.state.count)
    // }
    // incremaent(){
    //     this.setState({
    //         count : this.state.count + 1,
    //     })
    //     console.log(this.state.count)
    //     // note that in UI, digit is greater than the digit in console
    //    // because state is asyncroneous and console is running before the state changed
    //     // this is beacause asyncronious call , to make it syncronious do the following
    // }
    // incremaent(){
    //     this.setState({
    //         count : this.state.count + 1,
    //     } , () => {console.log(this.state.count)})
        
    //     // in this why the callback will run after the state changed
    // }

    // multipleIncrement(){
    //     // this function should increment three every time but result is different
    //     // this function excecute increment function only one time and that's because react group multiple setState calls
    //     // into a single update for batter performance
    //     this.incremaent();
    //     this.incremaent();
    //     this.incremaent();
    // }

    // // now if we want to update state with respect to the previous we pass function not object in setState argument
    // incremaent(){
       
    //    this.setState( (previousState ) => ({
    //     count : previousState.count + 1
    // }))
    // }

    // // now this function will work as expected
    // multipleIncrement(){
    //     this.incremaent();
    //     this.incremaent();
    //     this.incremaent();
    // }

    // // if function value depend on props then
    // incremaent(){
       
    //     this.setState( (state , props) => {
    //         return {count : state.count + props.numbertoinc}
    //     })
    
    // }
    // // second way if function value depend on props then
    // incremaent(){
       
    //     this.setState( (state , props) => ({
    //         count : state.count + props.numbertoinc
    //     }))
    
    // }

    // // now this function will work as expected
    // multipleIncrement(){
    //     this.incremaent();
    //     this.incremaent();
    //     this.incremaent();
    // }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => this.incremaent()} className="bg-yellow-300 px-2 text-white">Increment</button>

            </div>
        )
    }
}
