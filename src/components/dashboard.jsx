import React, { Component } from 'react';

class Dashboard extends Component {
    render(){
        return(
            <div class="wrapper">
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Dashboard</h3>
        </div>

        <ul class="list-unstyled components">
            <p>Nantenaina</p>
            <li class="active">
                <a href="#" data-toggle="collapse" aria-expanded="false">Accueil</a>
            </li>
            <li>
                <a href="#">A propos</a>
            </li>
            <li>
                <a href="#" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </nav>

</div>
        )
    }
}
export default Dashboard;
