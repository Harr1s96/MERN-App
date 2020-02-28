import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register';
import Details from "./Details";
import Nav from "./Nav";
import Help from "./Help";
import './Nav.css'

function App() {
  return (
    <div className="App">
      <main>
          <Router>
              <Route path="/" component={Nav}/>
              <Route exact path='/' component={Register}></Route>
              <Route path="/details" component={Details}/>
              <Route path="/help" component={Help}/>
          </Router>
      </main>
    </div>
  );
}

export default App;
