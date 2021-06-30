import React from 'react'

function RegularFunctional2(props) {

    console.log("Regular functional component rendered");
    return (
        <div>
            <h1>Hello, {props.sendname}</h1>
        </div>
    )
}

export default RegularFunctional2
