import { useSelector , useDispatch} from "react-redux";
import * as Action from '../actions/counterActions'


const decrement = (dispatch) => {
    dispatch(Action.decrement())
}


function Counter() {

    const CounterValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    const reset = () => {
        dispatch(Action.reset())
    }

    const incrementby = (value) => {
        dispatch(Action.incrementby(value))
    }

  return (
    <div>
        
        <h1>Counter Value : {CounterValue} </h1>
        <button onClick={ () => dispatch(Action.increment())} className="m-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Increment</button>
        <button onClick={ () => decrement(dispatch)} className="m-5focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Decrement</button>
        <button onClick={() => incrementby(10)} className="m-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Increment by 10</button>
        <button onClick={reset} className="m-5 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Reset</button>
    </div>
  )
}

export default Counter