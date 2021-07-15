import React, { Component } from "react";
import axios from "axios";
class GetMothod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error : ''
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        this.setState({
            error : `error in retriving data ${err}`
        })
      });
  }
  render() {
      const {posts , error } = this.state;
    return (
      <div>
          {
              posts.length ? posts.map(post => <p key={post.id}>{post.title}</p>) : <h3>No posts found</h3>
          }
          {
              error ? <p>{error}</p> : ''
          }
      </div>
    );
  }
}

export default GetMothod;
