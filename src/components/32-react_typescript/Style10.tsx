import React from "react"

type StyleType = {
    style : React.CSSProperties
}

function Style10(props : StyleType) {
    return (
        <div>
            <h1>Style component</h1>
            <div style={props.style}>
                i am styled div
            </div>
        </div>
    )
}

export default Style10
