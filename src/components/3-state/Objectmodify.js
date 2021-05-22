import React, { Component } from 'react'

export default class Objectmodify extends Component {
    state = {
        posts : [
            {
                title : "title 1",
                description : "descripition 1"
            },
            {
                title : "title 2",
                description : "descripition 2"
            }
        ]
    }
    Updatelist(){
        // this.state.posts[0].title = "ASDF"; // Do not mutate state directly. Use setState()

        const posts = [...this.state.posts];
   
        
        posts[0].title = "update title 1";
        posts[1].title = "update title 2";
    
        
        this.setState(posts)
    }
   
    render() {

        return (
            <div>
                <div>{this.state.posts[0].title}</div>
                <div>{this.state.posts[1].title}</div>
                <button onClick={() => this.Updatelist()}>update</button>
            </div>
        )
    }
}
