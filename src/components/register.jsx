import React, { Component } from 'react';

class Register extends Component {
    render(){
        return(
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

        )
    }
}
export default Register;
