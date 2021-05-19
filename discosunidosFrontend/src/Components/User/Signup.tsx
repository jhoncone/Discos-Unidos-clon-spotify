import { setupMaster } from 'cluster';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { User } from '../Users/User';
import *as userService from '../Users/UserService'
import  'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router';

type Inputchange=ChangeEvent<HTMLInputElement>;//definiendo un tipo de dato con typescript

function Signup() {

const history=useHistory();

    const [user,setUser]=useState<User>({
      fullname:"",
      username:"",
      password:""
    });
  
  
  
  const handleInputChange=(e:Inputchange)=>{
           setUser({...user,[e.target.name]: e.target.value})
          
  
  
  }

  const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   //console.log(user);
   await userService.createUsers(user);
   toast.success('New user added');
   history.push('/Users')
  // console.log(res);

  }

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
                placeholder="Email address" required  />
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="user_email">Username</label>
              <input name="username" 
              type="name" 
              className="form-control" 
              id="user_name" 
              onChange={handleInputChange}
              placeholder="Username" required />
            </div>
          
        <div className="form-group">
          <label className="sr-only" htmlFor="user_password">Password</label>
          <input name="password" 
          type="password" 
          className="form-control" 
          id="user_password" 
          onChange={handleInputChange}
          placeholder="Password" required />
          
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block" id="authButton">Sign up</button>
        </div>
        </form>
      </div></div>

    </div>
  </div>
  );
}

export default Signup;