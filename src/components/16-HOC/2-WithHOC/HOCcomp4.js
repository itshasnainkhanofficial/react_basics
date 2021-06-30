import React, { Component } from 'react'


// For bare minimum code
// step # 1
// export default class HOCcomp4 extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


// step # 2
// class HOCcomp4 extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }


// // step # 3

// const EnhancedComp = (OriginalComp) => {
//     class HOCcomp4 extends Component {
//         render() {
//             return (
//                 <OriginalComp myname="Hasnain"/>
//             )
//         }
//     }

//     return HOCcomp4
// }


// // now for counter
// const EnhancedComp = (OriginalComp) => {
//     class HOCcomp4 extends Component {
//         constructor(props) {
//             super(props)
        
//             this.state = {
//                  count : 0
//             }
//         }
        
//         increamentCounter = () => {
//             this.setState( (pre) => {
//                 return {
//                     count : pre.count + 1
//                 }
//             })
//         }

//         render() {
//             return (
//                 <OriginalComp count={this.state.count} incfunc={this.increamentCounter}/>
//             )
//         }
//     }

//     return HOCcomp4
// }


// export default EnhancedComp;

// // Passing Different Values for different component
// const EnhancedComp = (OriginalComp , incrementBy) => {
//     class HOCcomp4 extends Component {
//         constructor(props) {
//             super(props)
        
//             this.state = {
//                  count : 0
//             }
//         }
        
//         increamentCounter = () => {
//             this.setState( (pre) => {
//                 return {
//                     count : pre.count + incrementBy
//                 }
//             })
//         }

//         render() {
//             return (
//                 <OriginalComp count={this.state.count} incfunc={this.increamentCounter}/>
//             )
//         }
//     }

//     return HOCcomp4
// }


// export default EnhancedComp;




// Passing props from parent to child
const EnhancedComp = (OriginalComp , incrementBy) => {
    class HOCcomp4 extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        
        increamentCounter = () => {
            this.setState( (pre) => {
                return {
                    count : pre.count + incrementBy
                }
            })
        }

        render() {
            return (
                // <OriginalComp count={this.state.count} incfunc={this.increamentCounter}/>
                <OriginalComp count={this.state.count} incfunc={this.increamentCounter} {...this.props}/>
            )
        }
    }

    return HOCcomp4
}


export default EnhancedComp;