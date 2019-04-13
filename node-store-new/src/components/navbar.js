import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Navbar extends Component {
    render() {
      return (
        <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto bts-nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/store">Star Store</Link>
                </li>
                <li class="nav-item px-3">
                    <Link class="nav-link" exact to="/">Home</Link>
                </li>
                
                <li class="nav-item">
                    <Link class="nav-link" to="/contact">Contact Us</Link>
                </li>
            </ul>
            </div>
        </nav>
      );
    }
  }


export default Navbar;
