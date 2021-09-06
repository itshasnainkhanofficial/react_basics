// import { createSlice } from '@reduxjs/toolkit'

// const initialState = [
//   { id: '0', name: 'Hasnain' },
//   { id: '1', name: 'Zain' },
//   { id: '2', name: 'Tayyab' }
// ]

// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {}
// })

// export default usersSlice.reducer

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'
console.log("running user slice file");

const initialState = [
  //   { id: '0', name: 'Hasnain' },
  // { id: '1', name: 'Zain' },
  // { id: '2', name: 'Tayyab' },
  // { id: '3', name: 'bilal' },
  // { id: '4', name: 'asad' },
];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  console.log("geting from user slice",response)
  return response.data
})


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  }
})

export default usersSlice.reducer