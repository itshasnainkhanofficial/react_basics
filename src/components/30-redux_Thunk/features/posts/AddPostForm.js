import React, { useState } from "react";
// import { useDispatch } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  

  const dispatch = useDispatch()
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const [userId, setUserId] = useState('')
  const users = useSelector(state => state.users)
  const onAuthorChanged = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
    //   dispatch(
    //     postAdded({
    //       id: nanoid(),
    //       title,
    //       content
    //     })
    //   )
    //   dispatch(postAdded(title,content))
      dispatch(postAdded(title,content , userId))

      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => {
    return (
 
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    )
  })

  return (
    <section>
      <h1 className="text-center py-2">Add a New Post</h1>
      
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="postTitle"
            >
              Post Title:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="postContent"
            >
              Content:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="postAuthor"
            >
              Author:
            </label>
          </div>

          <div className="md:w-2/3">
          <select id="postAuthor" value={userId} onChange={onAuthorChanged} className="bg-indigo-400 text-white">
          <option value="Select Author">Select Author</option>
          {usersOptions}
        </select>
          </div>

        </div>
       
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={onSavePostClicked}
              disabled={!canSave}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
