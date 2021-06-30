import React from 'react'

// import {PureComponent} from 'react'
// class PureComponent3 extends PureComponent {
// class PureComponent3 extends React.PureComponent {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count : 1
//         }
//     }

//     render() {
//         console.log("Pure Component Rendered")
//         return (
//             <div>
//                 <button className="bg-red-300 p-3 m-3" onClick={ () => {this.setState( {count : 1 })}}>You clicked {this.state.count} times</button>
//             </div>
//         )
//     }
// }

// export default PureComponent3



// props
class PureComponent3 extends React.PureComponent {

    render() {
        console.log("Pure Component Rendered")
        return (
            <div>
                <h1>{this.props.sendname}</h1>
            </div>
        )
    }
}

export default PureComponent3
