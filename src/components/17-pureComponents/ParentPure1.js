import React, { Component } from 'react'
import PureComponent3 from './PureComponent3'
import RegularComp2 from './RegularComp2'


// // changing in state
// class ParentPure1 extends Component {
//     render() {
//         return (
//             <div>
//                 <RegularComp2/>
//                 <PureComponent3/>
//             </div>
//         )
//     }
// }



// changing in props
class ParentPure1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myname : "hasnain"
        }

    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                myname : "Ali"
            })
        }, 500);
    }

    render() {
        return (
            <div>
                <RegularComp2 sendname={this.state.myname}/>
                <PureComponent3 sendname={this.state.myname}/>
            </div>
        )
    }
}

export default ParentPure1
