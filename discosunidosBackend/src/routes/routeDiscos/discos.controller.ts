import {RequestHandler} from 'express'
import Disco from './Disco'

export const createDiscos:RequestHandler=async(req,res)=>{

   const videoFound= await Disco.findOne({url: req.body.url})
   if(videoFound)
   return res.status(301).json({message: 'the URL alredy exist'})
    const disco=new Disco(req.body)
    const savedDisco=await disco.save()
    res.json(savedDisco);
}

export const getDiscos:RequestHandler=async(req,res)=>{
    try {
        const discos=await Disco.find()
    return res.json(discos);
        
    } catch (error) {
        res.json(error)
        
    }
}
export const getDisco:RequestHandler=async(req,res)=>{
   const videoFound= await Disco.findById(req.params.id)
   if(!videoFound)return res.status(204).json()
   return res.json(videoFound)
}


export const deleteDisco:RequestHandler=async(req,res)=>{

    const videoFound= await Disco.findByIdAndDelete(req.params.id)
    if(!videoFound)return res.status(204).json()
    return res.json(videoFound)
}

export const updateDisco:RequestHandler=async(req,res)=>{
    const videoUpdated= await Disco.findByIdAndUpdate(req.params.id,req.body)
   res.json(videoUpdated)
}