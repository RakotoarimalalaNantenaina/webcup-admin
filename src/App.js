import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-6">
            <div className="login-wrap">
              <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">SE CONNECTER</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" id="inscrire" className="tab">S'INSCRIRE</label>
                <div className="login-form">
                  <div className="sign-in-htm">
                    <div className="hr"></div>
                    {/* formulaire connexion */}
                    <form>
                      <h4>CONNEXION</h4><br />
                      <div id="form-seconnecter">
                        <div className="group">
                          <label for="user" className="label">Nom d'utilisateur:</label>
                          <input id="user" type="text" className="input" />
                        </div><br />
                        <div className="group">
                          <label for="pass" class="label">Mot de passe:</label>
                          <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                      </div>
                      <br />
                      <div className="group">
                        <button id="btn-seconnecter" className="button">Se connecter</button>
                      </div>
                    </form>
                  </div>

                  {/* formulaire inscription  */}
                  <div className="sign-up-htm">
                    <form>
                      <div className="hr"></div>
                      <h4>INSCRIPTION</h4>
                      <div className="group">
                        <label for="user" className="label">Nom d'utilisateur</label>
                        <input id="" type="text" className="input" name="" placeholder="nom d'utilisateur" />
                      </div>
                      <div className="group">
                        <label for="user" className="label">E-mail:</label>
                        <input id="" type="email" className="input" name="" placeholder="exemple@exemple.com" />
                      </div>

                      <div className="group">
                        <label for="user" className="label">Mot de passe:</label>
                        <input id="" type="password" className="input" name="" placeholder="********" />
                      </div>

                      <div className="group">
                        <label for="pass" className="label">Confirmer mot de passe:</label>
                        <input id="" type="password" className="input" data-type="password" name="" placeholder="********" />
                      </div>
                      <br />
                      <div className="group">
                        <button className="button">S'inscrire</button>
                      </div>
                    </form>
                  </div>

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
