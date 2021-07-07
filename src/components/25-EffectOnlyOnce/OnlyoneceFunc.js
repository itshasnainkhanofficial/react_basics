import React, { useEffect , useState } from 'react'

function OnlyoneceFunc() {
    const initialXState = 0;
    const initialYState = 0;

    const [x, setx] = useState(initialXState)
    const [y, sety] = useState(initialYState)

    const LogPosition = (e) => {
        console.log("mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }
   // implementing component did mount with empty array
    useEffect( () => {
        console.log("use effect")
        window.addEventListener("mousemove" , LogPosition)
    } , []) // here is empty array
    // now
    return (
        <div>
            <h1>X - {x}</h1>
            <h1>Y - {y}</h1>
        </div>
    )
}

export default OnlyoneceFunc

