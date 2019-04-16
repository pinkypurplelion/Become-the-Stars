import React, { Component } from "react";
import {Helmet} from "react-helmet";
import MainPremium from './../forms/MainPremium'

class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Premium Gift Package | Become the Stars</title>
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
                            <img src="https://cdn.mos.cms.futurecdn.net/DNJ73RxGAEtnRmJh3sfLKY.jpg" alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $30
                            </h1>
                        </div>
                        <div class='col-8'>
                            <MainPremium />
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