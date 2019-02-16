import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Index from './../pages/index.js'
import Contact from './../pages/contact.js'
import Packages from './../pages/packages.js'
import Thanks from './../pages/thanks.js'

class Navbar extends Component {
  render() {
    return (
        <Router>
            <div>
            <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to="/packages">Packages</Link>
                    </li>
                    <li class="nav-item px-3">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact">Contacts</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            

            <Route path="/" exact component={Index} />
            <Route path="/packages/" exact component={Packages} />
            <Route path="/contact/" exact component={Contact} />
            <Route path="/thanks/" exact component={Thanks} />
            </div>
        </Router>
    );
  }
}

export default Navbar;