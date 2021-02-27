import React from "react";

import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
      <div>
          <Router>
             <NavBar>

             </NavBar>
          </Router>
      </div>
  );
}

export default App;
