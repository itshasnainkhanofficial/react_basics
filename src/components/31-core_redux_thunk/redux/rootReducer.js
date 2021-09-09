import {combineReducers} from 'redux'

import cakereducer from './cakes/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userreducer from './user/userReducer'


const rootReducer = combineReducers({
    cake : cakereducer,
    iceCream : iceCreamReducer,
    users : userreducer
})

export default rootReducer