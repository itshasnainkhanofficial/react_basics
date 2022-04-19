import { userList } from "../constants/actionTypes";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case userList.GETUSERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
