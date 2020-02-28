import React from 'react';
import axios from 'axios';
import RegisterInputs from './registerInputs.js';
import {Form} from 'react-bootstrap';
import { BASE_URL, REGISTER_URL } from './consts';

export default class Register extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}${REGISTER_URL}`, this.state)
            .then((res) => {
                console.log(res);
                this.setState({
                    email: this.state.email
                })
            })
            .catch(err => console.log(err));
            window.location = '/details/' + this.state.email;
    }

    handlechange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    render(){
        return(

            <Form id='format-form' handlesubmit={this.props.handleSubmit}>
                <RegisterInputs type='text' name='username' handlechange={this.handlechange} 
                value={this.state.username} placeholder='Username'></RegisterInputs>
                <RegisterInputs type='email' name='email' handlechange={this.handlechange} 
                value={this.state.email} placeholder='Email'></RegisterInputs>
                <RegisterInputs type='password' name='password' handlechange={this.handlechange} 
                value={this.state.password} placeholder='Password'></RegisterInputs>
                <RegisterInputs type='password' name ='confirmPassword' handlechange={this.handlechange} 
                value={this.state.confirmPassword} placeholder='Confirm password'></RegisterInputs>
                <RegisterInputs type='submit' handlechange={this.handlechange} value='Register'></RegisterInputs>
            </Form>
        );
    };
}