// api call that accept no parameter or return a value
// type ButtonProps = {
//     handleClick : () => void
// }

import React from "react"

// //when you need event passed in the event handler
// type ButtonProps = {
//     handleClick : (event : React.MouseEvent<HTMLButtonElement>) => void
// }

//when you need event passed in the event handler and id parameter
type ButtonProps = {
    handleClick : (event : React.MouseEvent<HTMLButtonElement> , id : number) => void
}

function ButtonEvent(props : ButtonProps) {
    return (
        <div>
            <h1>Button Event Component</h1>
            {/* <button onClick={props.handleClick}>Click</button> */}
            <button onClick={(e) => props.handleClick(e,1)}>Click</button>
        </div>
    )
}

export default ButtonEvent
