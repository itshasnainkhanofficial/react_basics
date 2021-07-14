import React , { useState} from 'react'
import Classclean from './Classclean'
// import Functionclean from './Functionclean'

function Parentclean() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Click</button>
            {/* {display && <Functionclean/>} */}
            {display && <Classclean/>}
        </div>
    )
}

export default Parentclean
