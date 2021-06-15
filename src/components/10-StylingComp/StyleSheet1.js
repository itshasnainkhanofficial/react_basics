import React from 'react'
import "./Style2.css";
// function StyleSheet1() {
//     return (
//         <div>
//             <h1 className="primary">Style Sheet</h1>
//         </div>
//     )
// }

// // class on condition

// function StyleSheet1() {
//     let primary = false;
//     let myclass = primary ? "primary" : ""

//     return (
//         <div>
//             <h1 className={myclass}>Style Sheet</h1>
//         </div>
//     )
// }

// class on condition and template litteral

function StyleSheet1() {
    let primary = true;
    let myclass = primary ? "primary" : ""

    return (
        <div>
            <h1 className={`${myclass} fontlarge`}>Style Sheet</h1>
        </div>
    )
}

export default StyleSheet1
