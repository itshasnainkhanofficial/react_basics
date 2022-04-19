import { CounterActionTypes } from "../constants/actionTypes";

export const increment = () => {
  return {
    type: CounterActionTypes.INCREMENT,
  };
};

export const decrement = () => ({
  type: CounterActionTypes.DECREMENT,
});
export const reset = () => ({
  type: CounterActionTypes.RESET,
});

export const incrementby = (value) => {
  return {
    type: CounterActionTypes.INCREMENTBY,
    payload: value,
  };
};
