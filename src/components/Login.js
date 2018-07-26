import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loginform from './forms/Loginform';
import login from '../actions/loginActions';

 class Login extends Component {

  submit = data => {
    console.log('before submitting',data);
    this.props.login(data).then(() => this.props.history.push('/'));
  }
    //this.props.history.push('/')
  render() {
    return (
      <div>
         Login Page

         <Loginform submit={this.submit} />
      </div>
    )
  
  }
}

Login.propTypes = {
  history : PropTypes.shape( {
    push : PropTypes.func.isRequired
  }).isRequired,
  login : PropTypes.func.isRequired
}


export default connect(null, { login })(Login);
