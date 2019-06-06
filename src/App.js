import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <center>
        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">SE CONNECTER</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">S'INSCRIRE</label>
            <div className="login-form">
              <div className="sign-in-htm">
                <div className="hr"></div>
                {/* formulaire connexion */}
                <form>
                  <h2>CONNEXION</h2>
                  <div className="group">
                    <label for="user" className="label">Username:</label><br />
                    <input id="user" type="text" className="input" name="username" />
                  </div>
                  <div className="group">
                    <label for="pass" class="label">Password:</label><br />
                    <input id="pass" type="password" className="input" data-type="password" name="password" />
                  </div>
                  <br />
                  <div className="group">
                    <input type="submit" name="submit" className="button" value="Se connecter" />
                  </div>
                </form>
              </div>

              {/* formulaire inscription  */}
              <div className="sign-up-htm">
                <form>
                  <div className="hr"></div>
                  <h4>INSCRIPTION</h4>
                  <div className="group">
                    <label for="user" className="label">Username:</label>
                    <input id="" type="text" className="input" name="" placeholder="username" />
                  </div>
                  <div className="group">
                    <label for="user" className="label">E-mail:</label>
                    <input id="" type="email" className="input" name="" placeholder="e-mail" />
                  </div>

                  <div className="group">
                    <label for="user" className="label">Password:</label>
                    <input id="" type="text" className="input" name="" placeholder="********" />
                  </div>

                  <div className="group">
                    <label for="pass" className="label">Confirmation password:</label>
                    <input id="" type="password" className="input" data-type="password" name="" placeholder="********" />
                  </div>
                  <br />
                  <div className="group">
                    <button type="submit" name="submit" class="button">S'INSCRIRE</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
        </center>
      </div>
    );
  }
}
export default App;
