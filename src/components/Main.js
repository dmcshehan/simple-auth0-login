import React, { Component } from 'react';

export default class Main extends Component{
    render(){
        return(
            <div>
                <p>Hello {this.props.name}, Welcome to Main</p>
                <p>DO you want to see the secret area? <a href="./secret">Click Here</a></p>

                {!this.props.auth.isAuthenticated() &&
                    <div>
                        <hr/>
                        <p>Please login first</p>
                        <hr/>
                        <button onClick={this.props.auth.login}>Login</button>
                    </div>    
                }

            
            </div>
        );
    }
}