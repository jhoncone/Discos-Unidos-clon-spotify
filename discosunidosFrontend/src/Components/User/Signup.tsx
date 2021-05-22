import { setupMaster } from 'cluster';
import React, { ChangeEvent, FormEvent, useState ,useEffect} from 'react';
import { toast } from 'react-toastify';
import { User } from '../Users/User';
import *as userService from '../Users/UserService'
import  'react-toastify/dist/ReactToastify.css';
import { useHistory,useParams } from 'react-router';

type Inputchange=ChangeEvent<HTMLInputElement>;//definiendo un tipo de dato con typescript


interface Params{
  id:string;
}

function Signup() {

const initialState={
  fullname:"",
  username:"",
  password:""
}


const history=useHistory();
const params=useParams<Params>();
//console.log(params)

    const [user,setUser]=useState<User>(initialState);
  
  
  
  const handleInputChange=(e:Inputchange)=>{
           setUser({...user,[e.target.name]: e.target.value});
  
  }

  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   //console.log(user);
if(!params.id){
  await userService.createUsers(user);
  toast.success('New user added');
  setUser(initialState);
}else{
  await userService.updateUser(params.id,user)
}
   history.push('/Users')
  // console.log(res);

  }

const getUser=async(id:string)=>{
  const res=await userService.getUser(id);
  console.log(res);
}

  useEffect(()=>{
       if (params.id)getUser(params.id);

  },[])


  return (
    <div className="row">
    <div className="col-md-4 offset-md-4">
      <div className="card">
        <div className="card-body">
          <h1>Registrarse</h1>
          <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="sr-only" htmlFor="user_email">Fullname</label>
              <input name="fullname"
               type="email" 
               className="form-control"
                id="user_email" 
                onChange={handleInputChange}
                value={user.fullname}
                placeholder="Email address" required  />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="user_email">Username</label>
              <input name="username" 
              type="name" 
              className="form-control" 
              id="user_name" 
              onChange={handleInputChange}
              value={user.username}
              placeholder="Username" required />
            </div>
          
        <div className="form-group">
          <label className="sr-only" htmlFor="user_password">Password</label>
          <input name="password" 
          type="password" 
          className="form-control" 
          id="user_password" 
          onChange={handleInputChange}
          value={user.password}
          placeholder="Password" required />
          
        </div>
            {
              params.id?
              
              <button type="submit" className="btn btn-info btn-block" id="authButton">update user</button>
          
            :
            <button type="submit" className="btn btn-primary btn-block" id="authButton">Sing up</button>
          
            


            
            }
        </form>
      </div></div>

    </div>
  </div>
  );
}

export default Signup;