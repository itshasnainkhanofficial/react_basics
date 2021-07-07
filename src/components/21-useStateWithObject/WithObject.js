import React , {useState } from 'react'
// using Object as state variable
function WithObject() {

    const [name , SetName] = useState({firstName: "1st name" , lastName : "2nd name"})

    return (
        <div>
            <div>
                <h1>{name.firstName}</h1>
                <h1>{name.lastName}</h1>
            </div>
            <div>
                {/* if we use only the following , then the input will not change */}
                {/* <input type="text" value={name.firstName} /> 
                <input type="text" value={name.lastName} /> */}

                {/* to change use onChange event */}
                {/* <input type="text" value={name.firstName} onChange={e => console.log(e)} />  */}


                {/* <input type="text" value={name.firstName} onChange={e => console.log(e.target)} />  */}

                {/* get value by e.target.value */}
                {/* <input type="text" value={name.firstName} onChange={e => console.log(e.target.value)} />  */}


                {/* <input type="text" value={name.firstName} onChange={e => SetName({firstName : e.target.value})} /> 
                <input type="text" value={name.lastName} onChange={e => SetName({lastName : e.target.value})} /> 
                
            <span>{JSON.stringify({name})}</span> */}

            <input type="text" value={name.firstName} onChange={e => SetName({...name,firstName : e.target.value})} /> 
            <input type="text" value={name.lastName} onChange={e => SetName({...name,lastName : e.target.value})} /> 
                
            {/* <span>{JSON.stringify({name})}</span> */}

            </div>
        </div>
    )
}

export default WithObject
