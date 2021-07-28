import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchButton() {
  const [post, setPost] = useState({});
  const [GetId, setGetId] = useState(1);
  const [IdBtn, setIdBtn] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IdBtn}`)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
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
      <button onClick={GetPostData}>Get post</button>
      <ul>
        {/* {post.map(item => {
                    return <li key={item.id}>{item.id} - {item.title}</li>
                })} */}
        {post.title ? <li>{post.title}</li>: "No data"}
      </ul>
    </div>
  );
}

export default FetchButton;