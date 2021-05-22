import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Addisc from '../Discos/Addisc';

import DiscosList from '../Discos/DiscosList';
import Home from '../Home';
import Login from '../User/Login';
import Signup from '../User/Signup';
import UserList from '../Users/UserList';
 //import './Navbar.css' 

function Navbar() {
    return (
    
        <Router>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a  className="navbar-brand" href="#">
       
      <Link to="/Discos">
          <img src="logo.png" alt="" width={50} height={50} className="d-inline-block align-text-top" /> </Link>
        DiscosUnidos
         
        </a>
       
      </div>
                
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
          Inicio
          </Link>
              
              </li>

              <li className="nav-item">
              <Link to="/Users" className="nav-link" aria-current="page">
          Users
          </Link>
              
              </li>

              <li className="nav-item">
              <Link to="/Registro" className="nav-link">
          Signup
          </Link>
              </li>
              <li className="nav-item">
              <Link to="/Login" className="nav-link">
           Login
          </Link>
             
             
              </li>

              <li className="nav-item">
              <Link to="/Addisco" className="nav-link">
           Addisc
          </Link>
             
             
              </li>

              {/*
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Perfil
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              */ }

            </ul>
          </div>
        </div>
      </nav>

      <Switch>

      
        <Route path="/Discos">
        <DiscosList/>
        </Route>

        <Route path="/Users">
        <UserList/>
        </Route>

        <Route exact path="/" component={Home} />
        
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/Registro">
          <Signup/>
        </Route>
        <Route path="/Addisco">
          <Addisc/>
        </Route>

        <Route path="/update/id" component={Signup}/>
      

        </Switch>
        
    
    </Router>
            
      
    )
}

export default Navbar
