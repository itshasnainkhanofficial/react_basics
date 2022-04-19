import { useSelector , useDispatch} from "react-redux";
import {increment} from '../redux/feature/counterSlice'


function Counter() {
    const dispatch = useDispatch()

    const CounterValue = useSelector((state) => state.counterReducer.value);

  return (
    <div>Counter: {CounterValue}
    
        <button onClick={() => dispatch((increment()))}>
            increment
        </button>
    </div>

  )
}

export default Counter