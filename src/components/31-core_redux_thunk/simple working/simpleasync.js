const redux = require("redux");
const ReduxThunk = require('redux-thunk').default
const axios = require("axios")


const applymiddleware = redux.applyMiddleware;
const createstore = redux.createStore


const initialState = {
    loading : false,
    users : [],
    error : ''
}


const USER_REQUEST = "FETCH_USERS"
const USER_SUCCESS = "USER_SUCCESS" 
const USER_FAILURE = "USER_FAILURE"

const fetchuserrequest = () => {
    return {
        type : USER_REQUEST
    }
}


const fetchusersuccess = (users) => {
    return {
        type : USER_SUCCESS,
        payload : users
    }
}

const fetchuserfailure = (error) => {
    return {
        type : USER_FAILURE,
        payload : error
    }
}



const fetchusers = () => {
    return function(dispatch){
        dispatch(fetchuserrequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then( res => {
            // res.users 
            const users = res.data.map( user => user.id);
            dispatch(fetchusersuccess(users))
        }).catch( err => {
            // err.message
            dispatch(fetchuserfailure(err.message))
        })
    }
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
                ...state,
                users : action.payload,
                loading :  false,
                error : ''
            }
        case USER_FAILURE:
            return {
                ...state,
                loading : false,
                error : action.payload,
                users : []
            }
    
        default: return state
    }
}

const store = createstore(userreducer , applymiddleware(ReduxThunk))

store.subscribe( () => console.log(store.getState()))
store.dispatch(fetchusers())