import React from 'react'

function List() {
    const names = ["React" , "Angular" , "Vue"];

    return (
        // <div>
        //     <h1>
        //         {names[0]}
        //         {names[1]}
        //         {names[2]}
        //     </h1>
        // </div>
        // <div >
        //     {
        //         <h1>
                    // {names.map((n) => `I like ${n} ` )} // index.js:1 Warning: Each child in a list should have a unique "key" prop.
        //         </h1>
        //     }
        // </div>
        // <div >
        //     {
                
        //             names.map((n) => <h1>{n}</h1> )  // index.js:1 Warning: Each child in a list should have a unique "key" prop.
                
        //     }
        // </div>



        <div >
            {
                
                    names.map((n , i) => <h1 key={i}>{n}</h1> )  // when we pass index as a key then error goes
                
            }
        </div>
    )
}

export default List
