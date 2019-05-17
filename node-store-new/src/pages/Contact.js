import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Contact Us | Become the Stars</title>
        </Helmet>

        {/* Desktop & Tablet Devices */}
        <div class="container-fluid d-none d-sm-block d-md-block">
          <div class="row">
            <div class="col-10 offset-1">
              <h1 class="bts-page-heading">The Star Mail</h1>
              <hr class="bts-hr-white"/>
            </div>
          </div>
          <div class="row">
            <div class="col-8 offset-2">
              <p>
                We are currently updating our contact system. For now, you can find us on instagram, twitter and facebook (@becomethestars). <br />
                You can also email us at contact@becomethestars.com <br />
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Devices */}
        <div class="container-fluid d-block d-sm-none d-md-none">
          <div class="row">
            <div class="col-10 offset-1">
              <h1 class="bts-page-heading">The Star Mail</h1>
              <hr class="bts-hr-white"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p>
                We are currently updating our contact system. For now, you can find us on instagram, twitter and facebook (@becomethestars). <br />
                You can also email us at contact@becomethestars.com <br />
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
 
export default Contact;