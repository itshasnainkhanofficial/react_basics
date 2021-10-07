// import { createSlice, nanoid, createAsyncThunk  } from "@reduxjs/toolkit";
import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { client } from '../../api/client'
// import { sub } from 'date-fns'

// const initialState = [
//   {
//     id: "1",
//     title: "First Post",
//     content: "This is the first post",
//     date: sub(new Date(), { minutes: 5 }).toISOString(),
//     reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
//   },
//   {
//     id: "2",
//     title: "Second Post",
//     content: "This is the second post",
//     date: sub(new Date(), { minutes: 10 }).toISOString(),
//     reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
//   },

//   {
//     id: "3",
//     title: "Third Post",
//     content: "This is the third post",
//     date: sub(new Date(), { minutes: 15 }).toISOString(),
//     reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
//   },
// ];
const initialState = { 
  posts : [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await client.get('/fakeApi/posts')
  return response.data
})  

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  // The payload creator receives the partial `{title, content, user}` object
  async initialPost => {
    // We send the initial data to the fake API server
    const response = await client.post('/fakeApi/posts', initialPost)
    // The response includes the complete post object, including unique ID
    return response.data
  }
)

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

    // postAdded: {
    //     reducer(state, action) {
    //       state.posts.push(action.payload)
    //     },
    //     prepare(title, content, userId) {
    //       return {
    //         payload: {
    //           id: nanoid(),
    //           date: new Date().toISOString(),
    //           title,
    //           content,
    //           userId,
    //           reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
    //         }
    //       }
    //     }
    //   },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },

    reactionAdded(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.posts.find(post => post.id === postId)
        if (existingPost) {
          existingPost.reactions[reaction]++
        }
      }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
  }
});






// export const { postAdded, postUpdated, reactionAdded   } = postsSlice.actions;
export const {postUpdated, reactionAdded   } = postsSlice.actions;

export default postsSlice.reducer;


export const selectAllPosts = state => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)