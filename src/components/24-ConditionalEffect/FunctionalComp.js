import React, { useEffect, useState } from 'react'


function FunctionalComp() {
    const initialCount = 0;
    const initialName = "Hamza"
    const [count, setCount] = useState(initialCount)
    const [name, setName] = useState(initialName)

    const increment = () => {
        setCount( count + 1 )
    }

    // here problem is same as class component
    // the title and consolde are re-rendering on every update
    // useEffect(() => {
    //     document.title = `You Clicked ${count} times`
    //     console.log("componentDidMount and componetDidUpdate")

    // })

    // to solve that problem , conditionaly re-render effect we pass array of observed states or props as second argument
    // or anything which we want to check whether that is change or not
    useEffect(() => {
        document.title = `You Clicked ${count} times`
        console.log("componentDidMount and componetDidUpdate")

    }, [count] )

    const ChangeText = (e) => {
        setName( e.target.value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <input type="text" onChange={ (e) => ChangeText(e)}/>
            <button onClick={increment}>Click</button>
        </div>
    )
}

export default FunctionalComp
