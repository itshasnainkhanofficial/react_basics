import {buyCake} from '../redux'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
            <h1>Number of cake : {props.noOfCakes}</h1>            
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// export default CakeContainer


const mapStateToProps = state => {
    return {
        noOfCakes : state.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)