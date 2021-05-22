import {Request,Response,RequestHandler, json} from 'express'
import User,{IUser} from './User'
import jwt from 'jsonwebtoken';
//export const signup:RequestHandler=async(req,res)=>{
export const signup=async(req:Request,res:Response)=>{
    const user : IUser= new User({
        username : req.body.username,
        email:  req.body.email,
        password : req.body.password
    })
    user.password = await user.encryptPassword(user.password);
    const savedUser = await user.save();
    console.log(savedUser);
    //token
    const token : string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'TOKEN_TEST');
    res.header('auth-token',token).json(savedUser);

    /*
    //saving a new user
    console.log(req.body)
    const user:IUser=new User({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password

    });
   user.password= await user.encryptPassword(user.password);
   const savedUser= await user.save();
    //token
    const token:string=jwt.sign({_id:savedUser._id},process.env.TOKEN_SECRET||'tokenstest')
    res.header('auth-token',token).json(savedUser)
   res.json(token)
   */

}


export const signin:RequestHandler=async(req,res)=>{
   
   
  const user= await User.findOne({email:req.body.email});
  if(!user) return res.status(400).json('Email or passwor is wrong') ;
  const correctPassword:boolean=await user.validatePassword(req.body.password,user.password);
  if(!correctPassword) return res.status(400).json('Invalid passord')
const token:string=jwt.sign({_id:user._id},process.env.TOKEN_SECRET||'tokentest',{
    expiresIn:60*60*24
})

  //res.send('login')
  res.header('auth-token',token).json(user);

}

export const profile:RequestHandler=async(req,res)=>{
   const user=1 
   //= await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }
    res.json(user);
    console.log('users')
    /*
   const user=await User.findById(req.userId,{password:0})
   
    if(!user)return res.status(404).json('No use Found')

    res.json(user)
    */
}

/*
export const createUsers:RequestHandler=async(req,res)=>{


    
    const userFound= await User.findOne({username: req.body.username})
    if(userFound)
    return res.status(301).json({message: 'the USERNAME alredy exist'})
     const user=new User(req.body)
     const savedUser=await user.save()
     res.json(savedUser);
     
}

export const getUsers:RequestHandler=async(req,res)=>{
    try {
        const discos=await User.find()
    return res.json(discos);
        
    } catch (error) {
        res.json(error)
        
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
*/