import { combineReducers  } from "redux";
import {counterReducer} from './counterReducer'
import {userReducer} from './userList'


export const allReducers = combineReducers({
    counter : counterReducer,
    userReducer
  });


