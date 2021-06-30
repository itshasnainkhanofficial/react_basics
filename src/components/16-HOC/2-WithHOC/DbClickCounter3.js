import React, { Component } from "react";
import HOCcomp4 from './HOCcomp4'

// // bare minimum code
// class DbClickCounter3 extends Component {
 
//   render() {
//     return (
//       <div>
//         Hello, {this.props.myname}
//       </div>
//     );
//   }
// }

// export default HOCcomp4(DbClickCounter3);






// // now for counter
// class DbClickCounter3 extends Component {
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



// render() {
//     const {count , incfunc }  = this.props;
//   return (
//     <div>
//       <button
//         className="bg-red-300 outline-gray-400 p-3 m-3"
//         onDoubleClick={incfunc}
//       >
//         You clicked {count} times
//       </button>
//     </div>
//   );
// }
// }


// export default HOCcomp4(DbClickCounter3);





// // Passing Different Values for different component
// class DbClickCounter3 extends Component {

//     render() {
//         const {count , incfunc }  = this.props;
//       return (
//         <div>
//           <button
//             className="bg-red-300 outline-gray-400 p-3 m-3"
//             onDoubleClick={incfunc}
//           >
//             You clicked {count} times
//           </button>
//         </div>
//       );
//     }
//   }
//   export default HOCcomp4(DbClickCounter3 , 2);





// Passing props from parent to child
class DbClickCounter3 extends Component {

    render() {
        const {count , incfunc }  = this.props;
      return (
        <div>
            This is {this.props.compname}
          <button
            className="bg-red-300 outline-gray-400 p-3 m-3"
            onDoubleClick={incfunc}
          >
            You clicked {count} times
          </button>
        </div>
      );
    }
  }
  export default HOCcomp4(DbClickCounter3 , 2);
  