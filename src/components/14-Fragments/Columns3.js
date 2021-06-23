import React from 'react'
// problem
// function Columns3() {
//     return (
//         // this will throw erro
//         //  <td> cannot appear as a child of <div>.
//         <div>
//             <td>Name</td>
//             <td>Email</td>
//         </div>
//     )
// }

// // solution
// function Columns3() {
//     return (

//         <React.Fragment>
//             <td>Name</td>
//             <td>Email</td>
//         </React.Fragment>
//     )
// }

// or simply
// function Columns3() {
//     return (

//         <>
//             <td>Name</td>
//             <td>Email</td>
//         </>
//     )
// }



// we can add Only key as a prameter in fragments
function Columns3() {
    const lists = [
        {
            id : 1,
            name : "ali"
        }
    ];

    return (

        <React.Fragment>
            {
            lists.map( (list ) => (
                    <React.Fragment key={list.id}>
                        {list.name}
                    </React.Fragment>
            ) )
        }
        </React.Fragment>
    )
}

// note if we pass empty tag then we cant add key parament
export default Columns3
