import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Digital Gift Package | Become the Stars</title>
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
            </div>
          </div>

        </div>

        
      </div>
    );
  }
}
 
export default Digital;