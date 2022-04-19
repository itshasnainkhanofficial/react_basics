import {CounterActionTypes} from '../constants/actionTypes';

const initialState = {
    value: 0
  }


export const counterReducer = (state = initialState , action) => {
    switch (action.type) {

        case CounterActionTypes.INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        case CounterActionTypes.DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
        case CounterActionTypes.RESET:
            return {
                ...state,
                value: 0
            }

        case CounterActionTypes.INCREMENTBY:
            return {
                ...state,
                value: state.value + action.payload
            }
    
        default:
            return state;
    }
}