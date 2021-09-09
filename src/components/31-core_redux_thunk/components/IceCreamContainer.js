import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {buyIceCream} from '../redux'
function IceCreamContainer() {
    const noOfIceCreams = useSelector(state => state.iceCream.noOfIceCreams)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number Of IceCream : {noOfIceCreams}</h1>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer
