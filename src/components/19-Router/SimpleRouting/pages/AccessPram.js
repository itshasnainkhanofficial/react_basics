import React from 'react'
import { useParams } from 'react-router-dom'

function AccessPram() {
    let param = useParams();

    return (
        <div>
            <h1 className="text-center">The accessed id is: {param.id}</h1>
        </div>
    )
}

export default AccessPram
