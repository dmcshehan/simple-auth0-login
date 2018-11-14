import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth';

const auth = new Auth();

let state = {};

let username = auth.getProfile().nickname || "Your Name";
window.setState = (changes)=>{
    state = Object.assign({},state,changes);
    //copy state and put inside {} and that object is overwritten by changes passed to the function
    
    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}
/*eslint no-restricted-globals: ["off", "location"]*/
let initialState = {
    name : username,
    location : location.pathname.replace(/^\/?|\/$/g,''),
    auth 
}

window.setState(initialState);

serviceWorker.unregister();
