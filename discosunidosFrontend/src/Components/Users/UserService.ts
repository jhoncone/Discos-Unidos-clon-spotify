import axios from 'axios'
import { User } from './User'

const API='http://localhost:4000'

export const getUsers=async()=>{
    return await axios.get(`${API}/users`)
   // console.log(res)
  
}

export const createUsers=async(user:User)=>{
    return await axios.post(`${API}/users`,user)
   // console.log(res)
  
}