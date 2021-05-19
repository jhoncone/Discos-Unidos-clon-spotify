import React, { ChangeEvent, useState } from 'react';
import { User } from '../Users/User';

type Inputchange=ChangeEvent<HTMLInputElement>;//definiendo un tipo de dato con typescript
function Login() {

  const [user,setUser]=useState<User>({
    fullname:"",
    username:"",
    password:""
  });



const handleInputChange=(e:Inputchange)=>{
         setUser({...user,[e.target.name]: e.target.value})
        


}


  return (
    <div className="row">
    <div className="col-md-4 offset-md-4">
      <div className="card">
        <div className="card-body">
          <h1>Iniciar Sesion</h1>
          <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav" >

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
          <div className="help-block text-right" id="promptForgotPassword"><a href="#">Forgot your password?</a></div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block" id="authButton">Sign In</button>
        </div>
        </form>
      </div></div>
      <div className="bottom text-center">
        New here? <a href="#" id="linkSignSwitcher"><strong>Sign Up</strong></a>
      </div>
    </div>
  </div>
  );
}

export default Login;