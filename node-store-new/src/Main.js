import React, { Component } from "react";
import {
  Route,
  Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Digital from "./pages/Digital";
import Premium from "./pages/Premium";
import Deluxe from "./pages/Deluxe";
import Thanks from "./pages/Thanks";
import Banner from "./components/banner";
import Navbar from "./components/navbar";

import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'

const history = createHistory()
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})


class Main extends Component {
    componentDidMount() {
      ReactGA.pageview(window.location.pathname)
    }

    render() {
      return (
        <Router history={history}>
            <body>
                <div >
                    <Banner />
                    <Navbar />
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/store" component={Store}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/thanks" component={Thanks}/>
                        <Route exact path="/store/digital" component={Digital}/>
                        <Route exact path="/store/premium" component={Premium}/>
                        <Route exact path="/store/deluxe" component={Deluxe}/>
                    </div>
                </div>
                <footer>
                  <div class="col-4 offset-4 text-center">
                    <hr class="bts-hr-white"/>
                    <p>Become the Stars <br />
                    <a href="/#/store" style={{color: "white"}}>Store</a> | <a href="/#/" style={{color: "white"}}>Home</a> | <a href="/#/contact" style={{color: "white"}}>Contact</a></p>
                  </div>
                </footer>
            </body>
        </Router>
      );
    }
  }
 
export default Main;