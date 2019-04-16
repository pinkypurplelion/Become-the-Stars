import React, { Component } from "react";
import {Helmet} from "react-helmet";
import MainDeluxe from './../forms/MainDeluxe'

class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Deluxe Gift Package | Become the Stars</title>
        </Helmet>

        <div class="container-fluid">
          <div class="row">
            <div class="col-10 offset-1">
                <div class="row">
                    <div class="col-4 bts-store-heading-nav">
                        Digital Package
                    </div>
                    <div class="col-4 bts-store-heading-nav">
                        Premium Package
                    </div>
                    <div class="col-4 bts-store-heading-nav">
                        Deluxe Package
                    </div>
                </div>
                <hr class="bts-hr-white" />
            </div>
          </div>
          <div class="row">
            <div class='col-10 offset-1'>
                    <div class="row">
                        <br/>
                        <div class='col-4'>
                            <img src="https://cdn.shopify.com/s/files/1/0616/2685/products/Sun-TripleUV-_Venus-transit_f6de48bb-a41c-4abe-9166-b3c1fd275495_1024x1024.jpg?v=1447786686" alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $65
                            </h1>
                        </div>
                        <div class='col-8'>
                            <MainDeluxe />
                        </div>
                    </div>
                </div>
          </div>
          
        </div>
      </div>
    );
  }
}
 
export default Digital;