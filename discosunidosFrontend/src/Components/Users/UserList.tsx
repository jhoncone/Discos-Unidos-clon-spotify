import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { User } from './User';
import *as userService from '../Users/UserService'
import UserItem from './UserItem'

function UserList() {

  const [users,setUsers]=useState<User[]>([])
  const loadUsers=async()=>{
    const res=await userService.getUsers();
    setUsers(res.data);
  }
  useEffect(() => {
  loadUsers()
  }, [])
  return (
        <div>
            {users.map((user)=>{
              return <UserItem user={user}/>
            })}
        </div>
  );
}

export default UserList;