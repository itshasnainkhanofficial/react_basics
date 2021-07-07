import React, { useState } from 'react'

function WithArray() {
    // here we are dealing with array of object
    const [names, setNames] = useState([{ id: 1 , vehicle : "bike" ,color : "black"} , {id: 2 ,  vehicle : "car" ,color : "blue"}  ]);


    // adding new object into array
   const AddObjct = () => {
        setNames([...names , {
            id : Object.keys(names).length + 1,
            vehicle : "Car: " + Math.random().toString(36).substring(10),
            color : "Color: " + Math.random().toString(36).substring(10)
        }])
    }

    return (
        <div>
            
            
            <div>
                <h3>-- using map --</h3>
                {names.map( (myname) => <h1 key={myname.id}>{myname.vehicle} - {myname.color}</h1> )}
            </div>

            <div>
                <h1>Add</h1>
                <button onClick={AddObjct}>Add Item</button>
            </div>

        </div>
    )
}

export default WithArray
