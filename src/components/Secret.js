import React, { Component } from 'react';

export default class Secret extends Component{
    render(){
        return(
            <div>
                <p>This is a secret area</p>
                <a href="/">Go To Home</a><br/>
                <button onClick={()=> this.props.auth.logout()}>Logout</button>
            </div>
        );
    }
}