import React, { useEffect, useState } from 'react'

function CounterEffect3() {
    const [Count, setCount] = useState(0)

    // let incrementcount = () => {
    //     setCount( Count + 1 )
    // }
    // or with good practice

    let incrementcount = () => {
        setCount( pre => pre + 1 )
    }
  // componentDidMount
  useEffect(() => {
    console.log("The use effect ran for componentDidMount");
  }, []);

// //   // componentDidUpdate
//   useEffect(() => {
//     console.log("The use effect ran for componentDidUpdate");
//   }, [Count]);


// // for both didmount and didupdate
// useEffect(() => {
//     console.log("The use effect ran for componentDidUpdate");
//   });

//   // componentWillUnmount
//   useEffect(() => {
//     console.log("The use effect ran"); // this will run for component mount
//     return () => {
//       console.log("the return is being ran"); // this will run just before component unmount
//     };
//   }, []); // consider this blank array to run effect only once when compoenent mount


    return (
        <div>
            <h1>{Count}</h1>
            <button onClick={incrementcount} className="bg-yellow-300 p-5">Increment</button>
        </div>
    )
}

export default CounterEffect3
