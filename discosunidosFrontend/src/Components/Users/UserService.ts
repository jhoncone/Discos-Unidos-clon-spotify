import axios from 'axios'
import { User } from './User'

const API='http://localhost:4000'

export const getUsers=async()=>{
    return await axios.get<User[]>(`${API}/users`)
   // console.log(res)
  
}

export const createUsers=async(user:User)=>{
    return await axios.post(`${API}/users`,user)
   // console.log(res)
  
}
export const getUser=async(id:string)=>{
    return await axios.get(`${API}/users/${id}`)
   // console.log(res)
  
}

export const updateUser=async(id:string,user :User)=>{
    return await axios.put<User[]>(`${API}/users/${id}`,user)
   // console.log(res)
  
}

export const deleteUser=async(id:string)=>{
    return await axios.delete(`${API}/users/${id}`)
   // console.log(res)
  
}