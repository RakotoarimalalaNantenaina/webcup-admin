import React, { Component } from 'react';

class Login extends Component {
    render(){
        return(
            <div className="sign-in-htm">
                    <div className="hr"></div>
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

        )
    }
}
export default Login;
