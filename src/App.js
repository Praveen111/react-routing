import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

const App = () => <div>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </div>
export default App;
