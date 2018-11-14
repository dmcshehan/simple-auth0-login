import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

class App extends Component {
  render() {
    let mainComponenet= "";
    switch(this.props.location){
      case "":
        mainComponenet = <Main {...this.props}/>;
        break;
      case "callback":
        mainComponenet = <Callback/>;
        break;
      case "secret":
        mainComponenet = this.props.auth.isAuthenticated() ? <Secret {...this.props}/> : <NotFound/>;
        break;
      default:
        mainComponenet = <NotFound/>;
        break;
    }
    return (
      <div>
        {mainComponenet}
      </div>
    );
  }
}

export default App;
