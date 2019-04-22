import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Stuff extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Store | Become the Stars</title>
        </Helmet>

        <div class="container-fluid">
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
                  <img class="img-fluid" src="https://www.geek.com/wp-content/uploads/2014/10/sunultra.jpg" alt="Card cap" />
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
                    <a class="btn btn-outline-info form-button-promo" href="/store/digital">Buy Now >></a>
                  </p>
                  <p class="card-price">$15 - $35</p>
                  <hr class="bts-hr-white"/>
                </div>
                <div class="col-4">
                  <img class="img-fluid" src="https://cdn.mos.cms.futurecdn.net/DNJ73RxGAEtnRmJh3sfLKY.jpg" alt="Card cap" />
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
                    <a class="btn btn-outline-info form-button-promo" href="/store/premium">Buy Now >></a>
                  </p>
                  <p class="card-price">$30 - $65</p>
                  <hr class="bts-hr-white"/>
                </div>
                <div class="col-4">
                  <img class="img-fluid" src="https://cdn.shopify.com/s/files/1/0616/2685/products/Sun-TripleUV-_Venus-transit_f6de48bb-a41c-4abe-9166-b3c1fd275495_1024x1024.jpg?v=1447786686" alt="Card cap" />
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
                    <a class="btn btn-outline-info form-button-promo" href="/store/deluxe">Buy Now >></a>
                  </p>
                  <p class="card-price">$65 - $135</p>
                  <hr class="bts-hr-white"/>
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