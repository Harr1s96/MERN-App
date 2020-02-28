import React from 'react';

export default class RegisterInputs extends React.Component  {

    render(){

        return (
            <div>
                <input onChange={this.props.handlechange} 
                type={this.props.type}
                id={this.props.id}
                value={this.props.value}
                name={this.props.name || ''} 
                placeholder={this.props.placeholder}
                required></input>
            </div>
        )
    }
}

