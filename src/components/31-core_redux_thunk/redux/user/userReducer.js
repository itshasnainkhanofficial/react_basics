import {USER_REQUEST , USER_SUCCESS, USER_FAILURE } from './userTypes'




const initialState = {
    loading : false,
    users : [],
    error : ''
}


const userreducer = (state = initialState , action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case USER_SUCCESS:
            return {
                // ...state,
                users : action.payload,
                loading :  false,
                error : ''
            }
        case USER_FAILURE:
            return {
                // ...state,
                loading : false,
                error : action.payload,
                users : []
            }
    
        default: return state
    }
}

export default userreducer