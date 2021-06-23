// import React from 'react'

// function CompoentC() {
//     return (
//         <div>
//             This is Compoent C
//         </div>
//     )
// }


// This is step 3 which is consume of context value
// import UserConsumer from './UserContext' don't do this
import {UserConsumer} from './UserContext'
function CompoentC() {
    return (
        <UserConsumer>
            {/* to use value we need to specify a function and the function gets usercontext value which is hasnain as its parameter*/}

            {
                (username) => {
                    return <div>Hello {username}</div>
                }
            }
        </UserConsumer>
    )
}

export default CompoentC
