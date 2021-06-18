import React, { Component } from 'react'


// working of componentdidmount and componentwillunmount
// export default class CounterLifeCycle2 extends Component {

//     componentDidMount(){
//         console.log("component did mount in counterlifecycle2")
//     }

//     componentWillUnmount(){
        
//         console.log("component will unmount in counterlifecycle2")
//     }
//     render() {
//         return (
//             <div>
//                 <h1>counter comp</h1>
//             </div>
//         )
//     }
// }


// working of componentdidupdate
export default class CounterLifeCycle2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    incrementcount = () => {
        this.setState( (prev) => {
            return {
                count : prev.count + 1
            }
        })
    }
    componentDidMount(){
        console.log("component did mount in counterlifecycle2")
    }
    componentDidUpdate(){
        console.log("component did update in counterlifecycle2")
    }
    componentWillUnmount(){
        
        console.log("component will unmount in counterlifecycle2")
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementcount} className="bg-yellow-300 p-5">Increment</button>
            </div>
        )
    }
}


