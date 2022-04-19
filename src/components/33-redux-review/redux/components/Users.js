import { useSelector , useDispatch} from "react-redux";
import * as Action from '../actions/userActions'
import React, { useEffect } from 'react'


function Users() {
    const dispatch = useDispatch()

    useEffect(() => {
          dispatch(Action.getUser())
        }
      , [dispatch])



    const AllUsers = useSelector((state) => state.userReducer.users);
    
  return (
    <div>
        {AllUsers.map((user) => {
            
            return (
                <div key={user.id}>
                    <h1>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h2>{user.username}</h2>
                    <h3>{user.email}</h3>
                    <h4>{user.address.street}</h4>
                    <h4>{user.address.suite}</h4>
                    <h4>{user.address.city}</h4>
                    <h4>{user.address.zipcode}</h4>
                    <h4>{user.address.geo.lat}</h4>
                    <h4>{user.address.geo.lng}</h4>
                    <h4>{user.phone}</h4>
                    <h4>{user.website}</h4>
                    <h4>{user.company.name}</h4>
                    <h4>{user.company.catchPhrase}</h4>
                    <h4>{user.company.bs}</h4>
                </div>
            )

        })}


    </div>
  )
}

export default Users