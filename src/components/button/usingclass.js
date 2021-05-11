import { Component } from 'react'

export class ClassButton extends Component {
    render() {
        return (
            <div>
                <button className="bg-indigo-300 text-white px-5 py-3 rounded-full hover:bg-indigo-600">Using class component</button>
            </div>
            // the following div will throw error because of only one parent restriction
            // <div>

            // </div>
        )
    }
}

export default ClassButton
