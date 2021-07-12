import React from 'react'
import Setstateprevious from './Setstateprevious'
import Stateinclass from './Stateinclass'
import Stateinfunctional from './Stateinfunctional'
function ParentState() {
    return (
        <div>
            <Stateinclass/>
            <Stateinfunctional />
            <Setstateprevious/>
        </div>
    )
}

export default ParentState
