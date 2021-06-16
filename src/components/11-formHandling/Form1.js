import React, { Component } from 'react'
// creating regular html form
// class Form1 extends Component {

//     render() {
//         return (
//             <div>
//                 <form>
//                     <div>
//                         <label htmlFor="myname">Name:</label>
//                         <input type="text" id="myname" className="outline-black"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// // // control react component
// class Form1 extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              myname : ""
//         }
//     }
    

//     render() {
//         return (
//             <div>
//                 <form>
//                     <div>
//                          {/* check browser input will not change , you can't write in input filed */}
//                         <label htmlFor="myname">Name:</label>
//                         <input type="text" value={this.state.myname} id="myname" className="outline-black"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Form1




// // // control react component
// class Form1 extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              myname : ""
//         }
//     }
    
// //     // create mathod and assign on onChange evnet
//     changeValue = (e) => {
//         console.log(e)
//         this.setState({
//             myname : e.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <div>
                         
//                         <label htmlFor="myname">Name:</label>
//                         <input type="text" value={this.state.myname} id="myname" onChange={this.changeValue} className="outline-black"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Form1
// // To prevent page refresh on submit and add select field
class Form1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myname : ""
        }
    }

    changeValue = (e) => {
        console.log(e)
        this.setState({
            myname : e.target.value,
            course : "react"
        })
    }

    coursehandler = (e) => {
        this.setState({
            course : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${this.state.myname} and ${this.state.course}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                         
                        <label htmlFor="myname">Name:</label>
                        <input type="text" value={this.state.myname} id="myname" onChange={this.changeValue} className="outline-black"/>
                        <label htmlFor="course">Courses</label>
                        <select name="course" id="course" value={this.state.course} onChange={this.coursehandler}>
                            <option value="react">react</option>
                            <option value="angular">angular</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form1


