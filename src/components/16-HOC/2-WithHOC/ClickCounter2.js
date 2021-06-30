import React, { Component } from "react";
import HOCcomp4 from "./HOCcomp4";

// // bare minimum code
// class ClickCounter2 extends Component {

//     render() {
//         return (
//             <div>
//                   Hello, {this.props.myname}
//             </div>
//         )
//     }
// }
// export default HOCcomp4(ClickCounter2);


// // now for counter
// class ClickCounter2 extends Component {
// //   // Repetition of code
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       count: 0,
// //     };
// //   }

// //   increamentCounter = () => {
// //     this.setState((pre) => {
// //       return {
// //         count: pre.count + 1,
// //       };
// //     });
// //   };

//   render() {
//       const {count , incfunc }  = this.props;
//     return (
//       <div>
//         <button
//           className="bg-red-300 outline-gray-400 p-3 m-3"
//           onClick={incfunc}
//         >
//           You clicked {count} times
//         </button>
//       </div>
//     );
//   }
// }
// export default HOCcomp4(ClickCounter2);





// // Passing Different Values for different component
// class ClickCounter2 extends Component {

//   render() {
//       const {count , incfunc }  = this.props;
//       console.log(this.props);
//     return (
//       <div>
//         <button
//           className="bg-red-300 outline-gray-400 p-3 m-3"
//           onClick={incfunc}
//         >
//           You clicked {count} times
//         </button>
//       </div>
//     );
//   }
// }
// export default HOCcomp4(ClickCounter2,5);







// Passing props from parent to child
class ClickCounter2 extends Component {

  render() {
      const {count , incfunc }  = this.props;
    return (
      <div>
            This is {this.props.compname}
        <button
          className="bg-red-300 outline-gray-400 p-3 m-3"
          onClick={incfunc}
        >
          You clicked {count} times
        </button>
      </div>
    );
  }
}
export default HOCcomp4(ClickCounter2,5);
