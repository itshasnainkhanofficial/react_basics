import React from 'react'
const headingStyle = {
    fontSize : "48px", // camelcase key and value as string
    color : "red"
}
function Inline3() {
    return (
        <div>
            <h1 style={headingStyle}>Inline style</h1>
        </div>
    )
}

export default Inline3
