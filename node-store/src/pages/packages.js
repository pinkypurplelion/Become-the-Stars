import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'

import DigitalImage from './../media/Orion_Nebula_-_Hubble_2006_res_2.jpg'
import PremiumImage from './../media/hubble_crab_nebula.jpg'
import DeluxeImage from './../media/PIA20468_hires.jpg'

import PackagesDummyRoute from './../components/packages-dummy-route.js'
import DigitalPackage from './../components/digital-package.js'
import PremiumPackage from './../components/premium-package.js'
import DeluxePackage from './../components/deluxe-package.js'


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

class Packages extends Component {
  render() {
    return (
        <Router>
        <fragment>
        <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-heading">
                        <br/>
                        <h1 id="title">Our Packages</h1>
                        <hr/>
                        <br/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-2 offset-xl-2">
                        <div class="card text-center">
                            <img class="card-img-top" src={DigitalImage} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Digital Registration Package</h5>
                                <p class="card-text">You can get everything our other packages offer, just digitally. These are perfect for the special someone who embraces their digital lives!</p>
                                <p class="card-price">$15 - $35</p>
                                <Link to='/packages/digital' class="btn btn-primary">Explore</Link>
                                <p class="mob-notice"><br/> Scroll to Bottom for Package Config</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div class="col-xl-2 offset-xl-1">
                        <div class="card text-center">
                            <img class="card-img-top" src={PremiumImage} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Premium Registration Package</h5>
                                <p class="card-text">These are our standard physical packages, meaning we will print and ship your custom gift package right to your door!</p>
                                <p class="card-price">$30 - $65</p>
                                <Link to='/packages/premium' class="btn btn-primary">Explore</Link>
                                <p class="mob-notice"><br/> Scroll to Bottom for Package Config</p>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div class="col-xl-2 offset-xl-1">
                        <div class="card text-center">
                            <img class="card-img-top" src={DeluxeImage} alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Deluxe Registration Package</h5>
                                <p class="card-text">The most special people deserve the most special gifts. These packages include deluxe items such as hardcover books and embossed certificates!</p>
                                <p class="card-price">$65 - $120</p>
                                <Link to='/packages/deluxe' class="btn btn-primary">Explore</Link>
                                <p class="mob-notice"><br/> Scroll to Bottom for Package Config</p>
                            </div>
                        </div>
                        <hr/>
                    </div>    
                </div>
                <br/>
            </div>

            <Route path="/packages" exact component={PackagesDummyRoute} />
            <Route path="/packages/digital" exact component={DigitalPackage} />
            <Route path="/packages/premium" exact component={PremiumPackage} />
            <Route path="/packages/deluxe" exact component={DeluxePackage} />

        </fragment>
        </Router>
    );
  }
}

export default Packages;
