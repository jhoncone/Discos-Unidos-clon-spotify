import { disconnect } from 'process'
import React from 'react'
import { User } from './User'

interface Props{
    user:User
}

function UserItem({user}:Props) {
    return (
        <div>
            <h1>{user.fullname}</h1>
            <p>{user.username}</p>
        </div>
    )
}

export default UserItem
