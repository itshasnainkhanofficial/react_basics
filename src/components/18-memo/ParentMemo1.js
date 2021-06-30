import React from 'react'
import MemoComp3 from './MemoComp3'
import RegularFunctional2 from './RegularFunctional2'

class ParentMemo1 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myname : "hasnain"
        }

    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                myname : "Ali"
            })
        }, 500);
    }

    render() {
        return (
            <div>
                <RegularFunctional2 sendname={this.state.myname}/>
                <MemoComp3 sendname={this.state.myname}/>
            </div>
        )
    }
}

export default ParentMemo1
