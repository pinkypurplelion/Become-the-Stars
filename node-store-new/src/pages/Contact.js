import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Contact Us | Become the Stars</title>
        </Helmet>

        <div class="container-fluid">
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
                You can also email us at contact@becomethestars.com 
              </p>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}
 
export default Contact;