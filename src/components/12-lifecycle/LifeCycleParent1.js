import React, { Component } from 'react'
import CounterEffect3 from './CounterEffect3'
// import CounterLifeCycle2 from './CounterLifeCycle2'

export default class LifeCycleParent1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showCounter : false
        }
    }

    setShowCounter = () => {
        this.setState({
            showCounter : !this.state.showCounter
        })
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center"> Our App</h1>
                  <button onClick={() => this.setShowCounter()} className="bg-red-500 p-5 text-white">
                      {this.state.showCounter ? "Hide Counter" : "Show Counter"}
                  </button>
                     {/* {this.state.showCounter && <CounterLifeCycle2 />} */}
                     {this.state.showCounter && <CounterEffect3 />}
            </div>
        )
    }
}
