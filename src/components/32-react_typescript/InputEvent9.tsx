import React from "react"

type InputType = {
    value : string,
    HandleEvent : (event : React.ChangeEvent<HTMLInputElement>) => void
}

// function InputEvent(props : InputType) {
    
//     return (
//         <div>
//             <h1>Input Event Component</h1>
//             <input type="text" value={props.value} onChange={props.HandleEvent} />
//         </div>
//     )
// }
function InputEvent(props : InputType) {
    const InputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <div>
            <h1>Input Event Component</h1>
            <input type="text" value={props.value} onChange={InputChange} className="outline-black" />
        </div>
    )
}

export default InputEvent
