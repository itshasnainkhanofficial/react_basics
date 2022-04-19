import { userList } from '../constants/actionTypes';


export const getUser = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch(getUserObject(data))
    }
  };


export const getUserObject = (data) => {
    return {
      type: userList.GETUSERS,
      payload : data
    };
  };