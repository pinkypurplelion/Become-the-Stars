import React, { Component } from "react";
import {
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Banner from "./components/banner"
import Navbar from "./components/navbar"

class Main extends Component {
    render() {
      return (
        <HashRouter>
            <body>
                <div >
                    <Banner />
                    <Navbar />
                    <h1>Simple SPA</h1>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/store" component={Store}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </body>
        </HashRouter>
      );
    }
  }
 
export default Main;