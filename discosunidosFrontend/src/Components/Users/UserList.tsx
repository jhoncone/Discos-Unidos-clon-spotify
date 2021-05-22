import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { User } from './User';
import *as userService from '../Users/UserService'
import UserItem from './UserItem'

function UserList() {

  const [users,setUsers]=useState<User[]>([])
  const loadUsers=async()=>{
    const res=await userService.getUsers();
    const formatedUsers=res.data.map(user=>{
      return{
        ...user,
        createAdt:user.createAdt? new Date(user.createAdt):new Date(),
        updateAdt:user.updatedAt? new Date(user.updatedAt):new Date(),
      }
    })
    .sort((a,b)=>b.createAdt.getTime() - a.createAdt.getTime())

    setUsers(formatedUsers);
  }
  useEffect(() => {
  loadUsers()
  }, [])
  return (
        <div className="row">
            {users.map((user)=>{
              return <UserItem user={user} key={user._id} loadUsers={loadUsers}/>
            })}
        </div>
  );
}

export default UserList;