import React , {useState , useEffect} from 'react'
import axios from 'axios'
function GetFunction() {
    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            // console.log(response);
            setPost(response.data)

        }).catch(error => {
            console.log(error)
        }
        )

    } , [])

    

    return (
        <div>
            <ul>
                {post.map(item => {
                    return <li key={item.id}>{item.id} - {item.title}</li>
                })}
            </ul>
        </div>
    )
}

export default GetFunction
