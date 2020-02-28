import React from 'react';
import './App.css';
import Details from "./Details";
import Nav from "./Nav";
import Help from "./Help";
import './Nav.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
          <Router>
              <Route path="/" component={Nav}/>
              <Route path="/details" component={Details}/>
              <Route path="/help" component={Help}/>
          </Router>
      </main>
    </div>
  );
}

export default App;
