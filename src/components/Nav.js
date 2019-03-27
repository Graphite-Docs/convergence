import React, { Component } from 'react';
import logo from '../assets/logofull.svg';

class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a class="navbar-brand" href="/"><img src={logo} alt='convergence' /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://publishing.graphitedocs.com">Create Your Own Blog</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Nav;
