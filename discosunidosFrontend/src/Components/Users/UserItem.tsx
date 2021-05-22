import { disconnect } from 'process'
import React from 'react'
import { User } from './User'
import ReactPlayer from 'react-player'
import './UserItem.css'
import{useHistory}  from 'react-router-dom'
import *as userService from './UserService'
interface Props{
    user:User,
    loadUsers:()=>void;
}

function UserItem({user,loadUsers}:Props) {

    const history=useHistory();

const handleDelete=async(id:string)=>{
   await userService.deleteUser(id);
  loadUsers();

}

    return (
        <div className="col-md-4">
            <div className="card card-body user-card" 
            style={{cursor:'pointer'}} 
           >
                <div className="d-flex justify-content-between">
            <h1  onClick={()=>history.push(`/update/${user._id}`)}>{user.fullname}</h1>
            <span className="text-danger" onClick={()=>user._id&& handleDelete(user._id)}>
                X
            </span>
            </div>
            <p>{user.username}</p>
            <div className="embed-responsibe embed-responsibe-16by9">
            <ReactPlayer url={user.username}/>
            </div>
            </div>
        </div>
    )
}

export default UserItem
