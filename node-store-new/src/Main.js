import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
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
        <BrowserRouter history={history}>
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

                {/* Desktop & Tablet Devices */}
                <footer class="d-none d-sm-block d-md-block">
                  <div class="col-4 offset-4 text-center">
                    <hr class="bts-hr-white"/>
                    <p>Become the Stars <br />
                    <a href="/#/store" style={{color: "white"}}>Store</a> | <a href="/#/" style={{color: "white"}}>Home</a> | <a href="/#/contact" style={{color: "white"}}>Contact</a></p>
                  </div>
                  <div class="col-10 offset-1 text-center">
                  <p style={{fontSize: "0.78vw", color: "gray"}}>
                      While Become the Stars while never assign the same star to be named twice, we unfortunately cannot control our competitors or other organisations. Since these stars are named and registered purely with BTS, without the involvment of regulatory or governing bodies, each star naming organisation has its own star database from which is assigns stars. It is important to understand that by naming your star with BTS, and by purchasing a gift package, the star's official name with the IAU (International Astronomical Union) - which is assigned according to a strict protocol - is not changed nor modified. These gifts are purely novelty and symbolic, offering no legal ownership or naming rights over these stars.
                    </p>
                  </div>
                </footer>

                {/* Mobile Devices */}
                <footer class="d-block d-sm-none d-md-none">
                  <div class="col-10 offset-1 text-center">
                    <hr class="bts-hr-white"/>
                    <p>Become the Stars <br />
                    <a href="/#/store" style={{color: "white"}}>Store</a> | <a href="/#/" style={{color: "white"}}>Home</a> | <a href="/#/contact" style={{color: "white"}}>Contact</a></p>
                  </div>
                  <div class="col-12 text-center">
                  <p style={{fontSize: "3vw", color: "gray"}}>
                      While Become the Stars while never assign the same star to be named twice, we unfortunately cannot control our competitors or other organisations. Since these stars are named and registered purely with BTS, without the involvment of regulatory or governing bodies, each star naming organisation has its own star database from which is assigns stars. It is important to understand that by naming your star with BTS, and by purchasing a gift package, the star's official name with the IAU (International Astronomical Union) - which is assigned according to a strict protocol - is not changed nor modified. These gifts are purely novelty and symbolic, offering no legal ownership or naming rights over these stars.
                    </p>
                  </div>
                </footer>
            </body>
        </BrowserRouter>
      );
    }
  }
 
export default Main;