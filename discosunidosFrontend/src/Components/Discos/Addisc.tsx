import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { Disco } from './Disco';

import *as discoService from './DiscoService'
import { useHistory } from 'react-router';

type Inputchange=ChangeEvent<HTMLInputElement>;//definiendo un tipo de dato con typescript
function Addisc() {

    const history=useHistory();

    const [disco,setDisco]=useState<Disco>({
        title:"",
        description:"",
        url:""
      });
    
    
    
    const handleInputChange=(e:Inputchange)=>{
             setDisco({...disco,[e.target.name]: e.target.value})
            
    
    
    }
  
    const handleSubmit=async(e:FormEvent<HTMLFormElement>)=>{
     e.preventDefault();
     //console.log(user);
     await discoService.createDiscos(disco);
     toast.success('New Disco added');
     history.push('/Discos')
    // console.log(res);
  
    }
  

    return (
        <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h1>Add Disc</h1>
              <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="sr-only" htmlFor="user_email">Title</label>
                  <input name="title"
                   type="text" 
                   className="form-control"
                    id="user_email" 
                    onChange={handleInputChange}
                    placeholder="Title" required  />
                </div>
                <div className="form-group">
                  <label className="sr-only" htmlFor="user_email">Description</label>
                  <input name="description" 
                  type="text" 
                  className="form-control" 
                  id="user_name" 
                  onChange={handleInputChange}
                  placeholder="description" required />
                </div>
              
            <div className="form-group">
              <label className="sr-only" htmlFor="user_password">URL</label>
              <input name="url" 
              type="text" 
              className="form-control" 
              id="user_password" 
              onChange={handleInputChange}
              placeholder="url" required />
              
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block" id="authButton">ADD</button>
            </div>
            </form>
          </div></div>
    
        </div>
      </div>
    )
}

export default Addisc
