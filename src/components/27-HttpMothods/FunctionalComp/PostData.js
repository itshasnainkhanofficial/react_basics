import React , {useState} from 'react'
import axios from 'axios'
function PostData() {
    const [PostTitle, setPostTitle] = useState("")
    const [PostBody, setPostBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( PostTitle, PostBody)
        const data = {
            title: PostTitle,
            body: PostBody
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                setPostTitle(response.data.title)
                setPostBody(response.data.body)
                // console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        
        <div className="PostData">
            <div>
                <h3>Post Data</h3>
                <h1>{PostTitle}</h1>
                <h1>{PostBody}</h1>
            </div>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Post Title</label>
                    <input type="text" className="form-control" value={PostTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Post Body</label>
                    <input type="text" className="form-control" value={PostBody} onChange={(e) => setPostBody(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostData
