import React , {useState} from 'react'



// // bad practice
function Stateinfunctional() {
// accept initial of state and return the current value of of state property and the method to update
// the value of the current state

    const [count , updateCount] = useState(0)  // here we use array destructring

    return (
        <div className="d-flex flex-column align-items-center">
            <div>{count}</div>
            {/* <div><button className="btn btn-primary" onClick={updateCount(count + 1)}>Increment</button></div> */}
             {/*since we are using function call in above so we convert it into an arrow function  */}
            <div><button className="btn btn-primary" onClick={ () => updateCount(count + 1)}>Increment</button></div>
        </div>
    )
}

export default Stateinfunctional
