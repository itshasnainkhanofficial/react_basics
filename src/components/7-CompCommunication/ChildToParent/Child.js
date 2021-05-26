
// lets first send data from parent to child
// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{`Hello ${this.props.parentName}`}</h1>
//                 <button className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button>
//             </div>
//         )
//     }
// }


// // now get method from parent to child
// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>{`Hello ${this.props.parentName}`}</h1>
//                 <button onClick={this.props.method} className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button>
//             </div>
//         )
//     }
// }




// // now send data to parent
// import React, { Component } from 'react'

// export default class Child extends Component {
//     mychildData = "From Child"
//     render() {
//         return (
//             <div>
//                 <h1>{`Hello ${this.props.parentName}`}</h1>
//                 <button onClick={() => this.props.method(this.mychildData)} className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Click</button>
//             </div>
//         )
//     }
// }
