// import React from 'react'

// https://medium.com/@adostes/you-dont-need-react-to-use-jsx-b78dd2a95c27

// function MyComponent() {
//     return <div>This is JSX</div>;
//   }

//   become 

// function MyComponent() {
//   return React.createElement('div', null, 'This is JSX');
// }


// This is done using a babel

// But starting with v7.9.0, the JSX transform plugin provides a new mode, called automati


// // using javaScript simple function
// function Functiongreet(props) {
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//         </div>
//     )
// }


// // using arrow fat function
// const Functiongreet = props => {
//     // props.name = "abc"; // this will throw error as props are immutable or read-only
//     return (
//         <div>

//             <h1>Hello {props.name}, {props.question}</h1>
//             {props.children}

//         </div>
//     )
// }

// export default Functiongreet


// by doing the following we can import component only by its orginal name
// export const Functiongreet = props => {
    //     return (
        //         <div>
        
        //             <h1>Hello {props.name}, {props.question}</h1>
        //             {props.children}
        
        //         </div>
        //     )
        // }



// // by doing the following we can import component only by any name
// const Functiongreet = props => {
//     return (
//         <div>

//             <h1>Hello {props.name}, {props.question}</h1>
//             {props.children}

//         </div>
//     )
// }
// export default Functiongreet