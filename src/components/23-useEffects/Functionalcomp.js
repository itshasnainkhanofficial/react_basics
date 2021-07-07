import React, { useEffect, useState } from 'react'

function Functionalcomp() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount( count + 1 )
    }

    useEffect(() => {
        document.title = `You Clicked ${count} times`
        console.log("componentDidMount and componetDidUpdate")

    })

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Click</button>
        </div>
    )

}

export default Functionalcomp
