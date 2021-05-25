// import React from 'react'

// // as i don't need state so i use simple functional component

// export default function Childcomp(props) {
//     return (
//         <div>
//             <button  onClick={props.GreetHandler}  className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Read Parent</button>            
//         </div>
//     )
// }
// // now add parameter , from child to parent component


import React from 'react'

// as i don't need state so i use simple functional component

export default function Childcomp(props) {
    return (
        <div>
            <button  onClick={ () => props.GreetHandler("Child1")}  className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Read Parent</button>            
        </div>
    )
}