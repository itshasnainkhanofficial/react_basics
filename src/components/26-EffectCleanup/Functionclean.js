import React, { useState , useEffect} from 'react'

function Functionclean() {
    const initialXState = 0;
    const initialYState = 0;

    const [x, setx] = useState(initialXState)
    const [y, sety] = useState(initialYState)

    const LogPosition = (e) => {
        console.log("mouse event")
        setx(e.clientX)
        sety(e.clientY)
    }

       useEffect( () => {
        console.log("use effect")
        window.addEventListener("mousemove" , LogPosition)
    } , [])


    //    useEffect( () => {
    //     console.log("use effect")
    //     window.addEventListener("mousemove" , LogPosition)
    //     return () => {
    //         window.removeEventListener("mousemove" , LogPosition)
    //     }
    // } , [])


    return (
         <div>
            <h1>X - {x}</h1>
            <h1>Y - {y}</h1>
        </div>
    )
}

export default Functionclean
