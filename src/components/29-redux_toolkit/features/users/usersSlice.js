import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Hasnain' },
  { id: '1', name: 'Zain' },
  { id: '2', name: 'Tayyab' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer