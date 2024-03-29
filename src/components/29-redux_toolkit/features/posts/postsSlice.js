import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
  {
    id: "1",
    title: "First Post",
    content: "This is the first post",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the second post",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
  },

  {
    id: "3",
    title: "Third Post",
    content: "This is the third post",
    date: sub(new Date(), { minutes: 15 }).toISOString(),
    reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload);
    // },
    postAdded: {
        reducer(state, action) {
          state.push(action.payload)
        },
        // prepare(title, content) {
        //   return {
        //     payload: {
        //       id: nanoid(),
        //       title,
        //       content
        //     }
        //   }
        // }



        // prepare(title, content, userId) {
        //   return {
        //     payload: {
        //       id: nanoid(),
        //       title,
        //       content,
        //       userId
        //     }
        //   }
        // }

        prepare(title, content, userId) {
          return {
            payload: {
              id: nanoid(),
              date: new Date().toISOString(),
              title,
              content,
              userId,
              reactions: {thumbsUp: 0, hooray: 0, heart : 0, rocket: 0, eyes: 0},
            }
          }
        }
      },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },

    reactionAdded(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.find(post => post.id === postId)
        if (existingPost) {
          existingPost.reactions[reaction]++
        }
      }
  },
});
export const { postAdded, postUpdated, reactionAdded   } = postsSlice.actions;

export default postsSlice.reducer;


export const selectAllPosts = state => state.posts

export const selectPostById = (state, postId) =>
  state.posts.find(post => post.id === postId)