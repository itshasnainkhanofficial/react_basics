import React from 'react'
// import OnlyoneceFunc from './OnlyoneceFunc'
import OnlyonceClass from './OnlyonceClass'
function ParentOnce() {
    return (
        <div>
            <OnlyonceClass/>
            {/* <OnlyoneceFunc/> */}
        </div>
    )
}

export default ParentOnce
