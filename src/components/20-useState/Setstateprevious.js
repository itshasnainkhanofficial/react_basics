import React , {useState} from 'react'


// // problem
// function Setstateprevious() {
//     const initialvalue = 0;

//     const [count , UpdateCount] = useState(initialvalue);

//     const increment = () => {
//         for (let index = 0; index < 5; index++) {
//             UpdateCount(count + 1)     // wrong way to modify previous state       
//         }
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <div>
//             <button className="btn btn-warning" onClick={ () => UpdateCount(count + 1)}>Increment</button>        
//             <button className="btn btn-secondary" onClick={ () => UpdateCount(count - 1)}>deccrement</button>        
//             <button className="btn btn-danger" onClick={increment}>Increment by 5</button>    
//             </div>    
//         </div>
//     )
// }

// // https://reactjs.org/docs/state-and-lifecycle.html
// // React may batch multiple setState() calls into a single update for performance.

// // Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
// export default Setstateprevious









// solution
function Setstateprevious() {
    const initialvalue = 0;

    const [count , UpdateCount] = useState(initialvalue);

    const increment = () => {
        for (let index = 0; index < 5; index++) {
            UpdateCount( precount => precount + 1 )  //  correct way to modify previous state       
        }
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>{count}</h1>
            <div className="d-flex flex-column align-items-center">
            <button className="btn btn-danger m-1" onClick={() => UpdateCount(initialvalue)}>Reset</button>    
            <button className="btn btn-warning m-1" onClick={ () => UpdateCount( pre => pre + 1)}>Increment</button>        
            <button className="btn btn-secondary m-1" onClick={ () => UpdateCount(pre => pre - 1)}>deccrement</button>        
            <button className="btn btn-danger m-1" onClick={increment}>Increment by 5</button>    
            </div>    
        </div>
    )
}
export default Setstateprevious
