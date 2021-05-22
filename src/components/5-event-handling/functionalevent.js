import React from 'react'


// use onClick instead of onclick
// use event handler {myfunc} inseted of string "abc()"

function myfanc() {
    console.log("button clicked")
}
function Functionalevent() {
    return (
        <div>
            <button onClick={myfanc}>Click</button>
            {/* common mistake is to use paranthesis, it became function call */}
            {/* in class component it become worst as the component re-render on every state change */}
            {/* <button onClick={myfanc()}>Click</button>*/} 
        </div>
    )
}

export default Functionalevent
