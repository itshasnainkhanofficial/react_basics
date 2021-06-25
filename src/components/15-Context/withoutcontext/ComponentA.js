import React from 'react'
import ComponentB from './ComponentB'
function ComponentA(props) {
    return (
        <div>
            <ComponentB username={props.username}/>
        </div>
    )
}

export default ComponentA
