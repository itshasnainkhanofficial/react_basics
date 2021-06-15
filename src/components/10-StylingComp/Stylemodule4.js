import React from 'react'
import kuchbhi from './Style3.module.css'
import './Style2.css'
import Advantagemodule5 from './Advantagemodule5'
function Stylemodule4() {
    return (
        <div>
            <h1 className="primary">simple style</h1>
            <h1 className={kuchbhi.primary}>module style</h1>
            <Advantagemodule5/>
        </div>
    )
}

export default Stylemodule4
