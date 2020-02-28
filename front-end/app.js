import React from 'react';
import './style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register';
import Details from "./components/Details";
import Nav from "./components/Nav";
import Help from "./components/Help";
import './style/Nav.css'
import SignIn from "./components/SignIn";

function App() {
  return (
      <div className="App">
      <main>
      <Router>
      <Route path="/" component={Nav}/>
      <Route  path='/register' component={Register}></Route>
      <Route path="/details" component={Details}/>
      <Route path="/Login" component={SignIn}/>
  <Route path="/help" component={Help}/>
  </Router>
  </main>
  </div>
);
}

export default App;
