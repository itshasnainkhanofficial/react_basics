import React from 'react'
import ComponentA from './ComponentA'
// function ParentContext1() {
    //     return (
        //         <div>
        //             <ComponentA/>
        //         </div>
        //     )
        // }




// import UserProvider from './UserContext' don't do this
import {UserProvider} from './UserContext'
// function ParentContext1() {
//     return (
//         <div>
//             {/* this is the place where we provide context so every child can access */}
//             <UserProvider>
//                 <ComponentA/>
//             </UserProvider>
//         </div>
//     )
// }



// no to complete step 2 we provide value to child by value attribute on provider component
// now any compoent nested in this parent component like A,B and C can access this value
// function ParentContext1() {
//     return (
//         <div>
            
//             <UserProvider value="Hasnain">
//                 <ComponentA/>
//             </UserProvider>

//             {/* now we can consume this value in any childer compoent so here we will consume in componet C */}
//         </div>
//     )
// }

// use with default
function ParentContext1() {
    return (
        <div>
            
           {/* we removed UserProvider */}
                <ComponentA/>

            {/* now we can consume this value in any childer compoent so here we will consume in componet C */}
        </div>
    )
}
export default ParentContext1
