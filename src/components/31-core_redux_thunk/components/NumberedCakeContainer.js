import React, { useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {buyCake} from '../redux'


function NumberedCakeContainer() {
    const [number, setnumber] = useState(1)
    // const changenumber = () => (e => e.target.value)
    const numOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Number Of Cakes : {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
            <input type="text" value={number} onChange={e => setnumber(e.target.value)} className="outline-black" />
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} cakes</button>
        </div>
    )
}

export default NumberedCakeContainer
