import axios from 'axios'
import { Disco } from './Disco'
/*
export const getDiscos=async()=>{
    return await axios.get('http://localhost:4000/discos')
   // console.log(res)
  
}
*/

const API='http://localhost:4000'

export const getDiscos=async()=>{
    return await axios.get(`${API}/discos`)
   // console.log(res)
  
}

export const createDiscos=async(disco:Disco)=>{
    return await axios.post(`${API}/discos`,disco)
   // console.log(res)
  
}