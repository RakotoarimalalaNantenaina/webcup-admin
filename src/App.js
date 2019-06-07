import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import Register from './components/register';
import Login from './components/login';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-3">
          <Router>
              <Route path="/dashboard" component={Dashboard} />
          </Router>
          </div>
          <div className="col-md-6">
            <div className="login-wrap">
              <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">SE CONNECTER</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" id="inscrire" className="tab">S'INSCRIRE</label>
                <div className="login-form">
                     {/* formulaire connexion */}
                <Login/>
                  {/* formulaire inscription  */}
                 <Register/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    );
  }
}
export default App;
