import React from 'react'
import ComponentC from './CompoentC'
function ComponentB(props) {
    return (
        <div>
            <ComponentC username={props.username}/>
        </div>
    )
}

export default ComponentB
