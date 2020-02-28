import React from 'react';
import FormInput from './FormInput.js';
import './SignIn.css';


// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validEmailRegex = RegExp(/[A-Za-z0-9.]+@[A-Za-z.]+\.[A-Za-z]{2,3}$/);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

export default class SignIn extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            formValid: false,
            errorCount: null,
            errors: {
              fullName: '',
              // email: '',
              password: '',
            }
        }
    }

    handleChange = ({ target: {value, name}}) => {
        let errors = this.state.errors;
  
        switch (name) {
          case 'username': 
            errors.fullName = 
              value.length < 5
                ? 'Full Name must be 5 characters long!'
                : '';
            break;
          // case 'email': 
          //   errors.email = 
          //     validEmailRegex.test(value)
          //       ? ''
          //       : 'Email is not valid!';
          //   break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be 8 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
    }

    submit = (event) => {
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
        
        if(this.state.formValid){
            console.log(`Username: ${this.state.username}`);
            console.log(`Not Password: ${this.state.password}`);
            if(event.target.name === 'username'){
                this.setState({
                    username: event.target.value
                })
            } else if(event.target.name === 'password'){
                this.setState({
                    password: event.target.value
                })
            }
        }

    }

    render(){
        const {errors, formValid} = this.state;
        return(
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h2>Sign In</h2>
                    <form>
                        <div className='userame'>
                            <label htmlFor="userame">Username</label>
                            <FormInput name='username' value={this.state.username} handleChange={this.handleChange}/>
                            {errors.fullName.length > 0 && 
                            <span className='error'>{errors.fullName}</span>}
                        </div>
                        {/* <div className='email'>
                            <label htmlFor="email">Email</label>
                            <FormInput name='email' value={this.state.email} handleChange={this.handleChange}/>
                            {errors.email.length > 0 && 
                            <span className='error'>{errors.email}</span>}
                        </div> */}
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange}/>
                            {errors.password.length > 0 && 
                            <span className='error'>{errors.password}</span>}
                        </div>
                    <button onClick={this.submit}>Submit</button>
                    {this.state.errorCount !== null ? <p className="form-status">Form is {formValid ? 'valid ✅' : 'invalid ❌'}</p> : 'Form not submitted'}
                    </form>
                </div>
            </div>
        );
    }
}