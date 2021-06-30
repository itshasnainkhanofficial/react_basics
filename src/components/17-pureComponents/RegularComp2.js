import React, { Component } from 'react'

// class RegularComp2 extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count : 1
//         }
//     }
    

//     render() {
//         console.log("Regular Component Rendered")
//         return (
//             <div>
//                 <button className="bg-red-300 p-3 m-3" onClick={ () => {this.setState( {count : 1 })}}>You clicked {this.state.count} times</button>
//             </div>
//         )
//     }
// }



// props 
class RegularComp2 extends Component {

    render() {
        console.log("Regular Component Rendered")
        return (
            <div>
                <h1>{this.props.sendname}</h1>
            </div>
        )
    }
}

export default RegularComp2
