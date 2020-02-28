import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/' component={Register}></Route>
      </Router>
    </div>
  );
}

export default App;
