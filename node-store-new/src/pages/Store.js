import React, { Component } from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";

import StarDigital from './../static/images/star-digital.jpg';
import StarPremium from './../static/images/star-premium.jpg';
import StarDeluxe from './../static/images/star-deluxe.jpg';

class Stuff extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Store | Become the Stars</title>
        </Helmet>

        {/* Desktop & Tablet Devices */}
        <div class="container-fluid d-none d-sm-block d-md-block">
          <div class="row">
            <div class="col-8 offset-2">
              <h1 class="bts-page-heading">The Stellar Store</h1>
              <hr class="bts-hr-white"/>
            </div>
          </div>
          <div class="row">
            <div class="col-8 offset-2">
              <div class="row">
                <div class="col-4">
                  <img class="img-fluid" src={StarDigital} alt="Card cap" />
                  <hr class="bts-hr-white"/> 
                  <p class="package-heading">
                    Digital Gift Package
                  </p>
                  <hr class="bts-hr-white"/>
                  <p>
                    name your star <br />
                    digital gift package <br />
                    no physical gifts <br />
                    addon astrology pack <br />
                    standard star <br /> <br />
                    <Link class="btn btn-outline-info form-button-promo" to="/store/digital">Buy Now >></Link>
                  </p>
                  <p class="card-price">From $15</p>
                  <hr class="bts-hr-white"/>
                </div>
                <div class="col-4">
                  <img class="img-fluid" src={StarPremium} alt="Card cap" />
                  <hr class="bts-hr-white"/> 
                  <p class="package-heading">
                    Premium Gift Package
                  </p>
                  <hr class="bts-hr-white"/>
                  <p>
                    name your star <br />
                    digital gift package <br />
                    premium physical gifts <br />
                    addon astrology pack <br />
                    constellation star <br /> <br />
                    <Link class="btn btn-outline-info form-button-promo" to="/store/premium">Buy Now >></Link>
                  </p>
                  <p class="card-price">From $30</p>
                  <hr class="bts-hr-white"/>
                </div>
                <div class="col-4">
                  <img class="img-fluid" src={StarDeluxe} alt="Card cap" />
                  <hr class="bts-hr-white"/> 
                  <p class="package-heading">
                    Deluxe Gift Package
                  </p>
                  <hr class="bts-hr-white"/>
                  <p>
                    name your star <br />
                    digital gift package <br />
                    deluxe physical gifts <br />
                    optional astrology pack <br />
                    superbright star <br /> <br />
                    <Link class="btn btn-outline-info form-button-promo" to="/store/deluxe">Buy Now >></Link>
                  </p>
                  <p class="card-price">From $65</p>
                  <hr class="bts-hr-white"/>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Mobile Devices */}
        <div class="container-fluid d-block d-sm-none d-md-none">
          <div class="row">
            <div class="col-10 offset-1">
              <h1 class="bts-page-heading">The Stellar Store</h1>
              <hr class="bts-hr-white"/>
            </div>
          </div>
          <div class="row">
            <div class="col-10 offset-1">
              <div class="row">
                <div class="col-12">
                  <img class="img-fluid" src={StarDigital} alt="Card cap" />
                  <hr class="bts-hr-white"/> 
                  <p class="package-heading">
                    Digital Gift Package
                  </p>
                  <hr class="bts-hr-white"/>
                  <p>
                    name your star <br />
                    digital gift package <br />
                    no physical gifts <br />
                    addon astrology pack <br />
                    standard star <br /> <br />
                    <Link class="btn btn-outline-info form-button-promo mob-button" to="/store/digital">Buy Now >></Link>
                  </p>
                  <p class="card-price">From $15</p>
                  <hr class="bts-hr-white"/>
                </div>
                <div class="col-12">
                  <img class="img-fluid" src={StarPremium} alt="Card cap" />
                  <hr class="bts-hr-white"/> 
                  <p class="package-heading">
                    Premium Gift Package
                  </p>
                  <hr class="bts-hr-white"/>
                  <p>
                    name your star <br />
                    digital gift package <br />
                    premium physical gifts <br />
                    addon astrology pack <br />
                    constellation star <br /> <br />
                    <Link class="btn btn-outline-info form-button-promo mob-button" to="/store/premium">Buy Now >></Link>
                  </p>
                  <p class="card-price">From $30</p>
                  <hr class="bts-hr-white"/>
                </div>
                <div class="col-12">
                  <img class="img-fluid" src={StarDeluxe} alt="Card cap" />
                  <hr class="bts-hr-white"/> 
                  <p class="package-heading">
                    Deluxe Gift Package
                  </p>
                  <hr class="bts-hr-white"/>
                  <p>
                    name your star <br />
                    digital gift package <br />
                    deluxe physical gifts <br />
                    optional astrology pack <br />
                    superbright star <br /> <br />
                    <Link class="btn btn-outline-info form-button-promo mob-button" to="/store/deluxe">Buy Now >></Link>
                  </p>
                  <p class="card-price">From $65</p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Stuff;