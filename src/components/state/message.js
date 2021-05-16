// import React, { Component } from 'react'

// export default class Message extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message : "Hasnain",
//         }
//     }
    

//     render() {
//         return (
//             <div>
//                 <h1>Assalm-o-Alaikum {this.state.message}</h1>
//             </div>
//         )
//     }
// }


// now change message using button
import React, { Component } from 'react'

export default class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hasnain",
        }
    }
    changeMessage(){
        this.setState({
            message : "Bilal"
        })
    }
    

    render() {
        return (
            <div>
                <h1>Assalm-o-Alaikum {this.state.message}</h1>
                <button onClick={() => this.changeMessage()} className="bg-red-300 px-2 text-white">Change message</button>
            </div>
        )
    }
}
