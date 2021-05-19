import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import discosList from './Discos/DiscosList'

function Home() {
  return (
        <div>
            <h1>titulo principal</h1>

            <Router>
      <div className="Container mt-5">
      
          <Link to="/" className="btn btn-dark">
          Discos
          </Link>
          </div>

          <Switch>
    
        <Route path="/Discos">
          
        </Route>
   

        </Switch>

          </Router>

        </div>



  );
}

export default Home;