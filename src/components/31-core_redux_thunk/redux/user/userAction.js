import {USER_REQUEST , USER_SUCCESS, USER_FAILURE } from './userTypes'
import axios from 'axios'

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

export const fetchusers = () => {
    console.log("fetch user running")
    return (dispatch) => {
        dispatch(fetchuserrequest())
        axios.get("https://jsonplaceholder.typicode.com/users").then( res => {
            // res.users 
            const users = res.data
            console.log("users", users)
            dispatch(fetchusersuccess(users))
        }).catch( err => {
            // err.message
            const errMsg = err.message
            dispatch(fetchuserfailure(errMsg))
        })
    }
}