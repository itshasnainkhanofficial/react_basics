import React from 'react'

function MemoComp3(props) {
    console.log("Memo functional component rendered");

    return (
        <div>
            <h1>Hello, {props.sendname}</h1>
            
        </div>
    )
}

// export default MemoComp3
export default React.memo(MemoComp3)