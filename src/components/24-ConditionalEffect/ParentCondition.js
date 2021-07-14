import React from 'react'
// import FunctionalComp from './FunctionalComp'
import ClassComp from './ClassComp'
function ParentCondition() {
    return (
        <div>
            <ClassComp />
            {/* <FunctionalComp/> */}
        </div>
    )
}

export default ParentCondition
