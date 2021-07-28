import React, { useState, useEffect } from "react";
import axios from "axios";

function DeletePost() {
  const [post, setPost] = useState({});
  const [GetId, setGetId] = useState(1);
  const [IdBtn, setIdBtn] = useState(1);
  const [ErrorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${IdBtn}`)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        // console.log(error);
        console.log(error.message)
        setErrorMsg(error.message);
      });
  }, [IdBtn]);

  const Changedata = (e) => {
    setGetId(e.target.value);
  };

  const GetPostData = () => {
    setIdBtn(GetId)
  }
  return (
    <div>
      <input type="text" onChange={(e) => Changedata(e)} value={GetId} />
      <button onClick={GetPostData}>Delete post</button>
      <ul>

        {post.title ? <li>{post.title}</li>: "No data"}
        {ErrorMsg}
      </ul>
    </div>
  );
}

export default DeletePost;