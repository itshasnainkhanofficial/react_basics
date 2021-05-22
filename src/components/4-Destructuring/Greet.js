// import React from 'react'

// const Greet = props => {
//     return (
//         <div>
//             <h1>Hello {props.name} {props.lastname}</h1>
//         </div>
//     )
// }

// export default Greet

// two ways to destructure props in functiional component


// // 1
// import React from 'react'

// const Greet = ({name , lastname}) => {
//     return (
//         <div>
//             <h1>Hello {name} {lastname}</h1>
//         </div>
//     )
// }

// export default Greet

// 2
import React from 'react'

const Greet = props => {
    const {name , lastname } = props;
    
    return (
        <div>
            <h1>Hello {name} {lastname}</h1>
        </div>
    )
}

export default Greet