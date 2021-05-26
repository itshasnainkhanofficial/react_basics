
// lets first send data from parent to child
// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//      name = "Parent Component"
//     render() {
//         return (
//             <div>
//                 <Child parentName={this.name}/>
//             </div>
//         )
//     }
// }


// // // now send method from parent to child
// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//      name = "Parent Component"
//      ParentMethod = () => {
//          console.log("Parent method")
//      }
//     render() {
//         return (
//             <div>
//                 <Child parentName={this.name}  method={this.ParentMethod}/>
//             </div>
//         )
//     }
// }


// // now get data from child
// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//      name = "Parent Component"
//      ParentMethod = (ChildData) => {
//          console.log(`This is ${ChildData}`)
//      }
//     render() {
//         return (
//             <div>
//                 <Child parentName={this.name}  method={this.ParentMethod}/>
//             </div>
//         )
//     }
// }
