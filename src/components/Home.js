import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Home extends Component {
  render() {
    return (
      <div>
        

        <h2>Home Component!!!!</h2>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default Home;
