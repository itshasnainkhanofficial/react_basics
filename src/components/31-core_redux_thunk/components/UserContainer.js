import React, {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {fetchusers} from '../redux'

function UserContainer() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.users)
    console.log("from user container",userData)
    useEffect(() => {

        dispatch(fetchusers())
        
    }, [])

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User list</h2>
            <div>
                {
                    userData && userData.users && userData.users.map(user => {
                        return <p key={user.id}>{user.name}</p>
                    })
                }
            </div>
        </div>
    )
}

export default UserContainer
