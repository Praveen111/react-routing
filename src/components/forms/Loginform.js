import React, { Component } from 'react';
import validator from 'validator';
import InlineMsg from '../msgs/InlineMsg';

class Loginform extends Component {
  state = {
    data : {
          email: "praveensbj8@gmail.com",
          password: "abcd"
    },
    loading: false,
    errors : {}
  }

  onChange(e){
    if(e.target.value) {
      this.setState( {data :  {
        ...this.state.data,
        [e.target.name] : e.target.value 
      }})
    } else {
      this.setState( {data :  {
        ...this.state.data,
        [e.target.name] : ''
      }})
    }
  
  }

  onSubmit(e) {
  e.preventDefault();
  const errors = {};
console.log(validator.isEmail(this.state.data.email));
  if(!validator.isEmail(this.state.data.email)) {
    
    errors.email = "Invalid Mail";
  }

  if(!this.state.data.password) {
    errors.password = "Can't be blank password"
  }
   this.setState({errors});
 
  if( Object.keys(errors).length === 0) {
    this.setState({loading: true});
    this.props.submit(this.state.data)
    
//     .catch(err => {
//  // {this.setState({errors: err.response.data.errors})}
//  console.log(err);
//     }
 //  );
  
  }
  console.log('state in loginform',this.state);
  }

  render() {

    const { data, errors, loading } = this.state;

    return (
      <div>
        {errors.global && <div><h2>Something went wrong!!!!</h2></div>}
        <form onSubmit={this.onSubmit.bind(this)} loading={loading}>
    <div> <label>Username:</label> <input type="text" name="email" value={data.email} onChange={this.onChange.bind(this)} /> <InlineMsg  msg={errors.email} /> </div>

        <div> <label>Password:</label> <input type="password" name="password" value={data.password} onChange={this.onChange.bind(this)} /> <InlineMsg  msg={errors.password} /> </div>
           <button type="submit">Click Me!</button>
          </form>
       
      </div>
    )
  }
}

export default Loginform;
