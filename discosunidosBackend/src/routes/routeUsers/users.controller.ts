import {RequestHandler} from 'express'
import User from './User'

export const createUsers:RequestHandler=async(req,res)=>{



   const videoFound= await User.findOne({username: req.body.username})
   if(videoFound)
   return res.status(301).json({message: 'the USERNAME alredy exist'})
    const disco=new User(req.body)
    const savedDisco=await disco.save()
    res.json(savedDisco);
}

export const getUsers:RequestHandler=async(req,res)=>{
    try {
        const discos=await User.find()
    return res.json(discos);
        
    } catch (error) {
        res.json(error)
console.log('hol')
        
    }
}
export const getUser:RequestHandler=async(req,res)=>{
   const videoFound= await User.findById(req.params.id)
   if(!videoFound)return res.status(204).json()
   return res.json(videoFound)
}


export const deleteUser:RequestHandler=async(req,res)=>{

    const videoFound= await User.findByIdAndDelete(req.params.id)
    if(!videoFound)return res.status(204).json()
    return res.json(videoFound)
}

export const updateUser:RequestHandler=async(req,res)=>{
    const videoUpdated= await User.findByIdAndUpdate(req.params.id,req.body)
   res.json(videoUpdated)
}