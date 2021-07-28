import React, { useState, useEffect } from "react";
import axios from "axios";

function GetIndiv() {
  const [post, setPost] = useState({});
  const [GetId, setGetId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${GetId}`)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [GetId]);

  const Changedata = (e) => {
    setGetId(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={(e) => Changedata(e)} value={GetId} />
      <ul>
        {/* {post.map(item => {
                    return <li key={item.id}>{item.id} - {item.title}</li>
                })} */}
        {post.title ? <li>{post.title}</li>: "No data"}
      </ul>
    </div>
  );
}

export default GetIndiv;
