import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Deluxe extends Component {
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
                The easiest thing to do is post on our <a href="http://forum.kirupa.com">forums</a>.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}
 
export default Deluxe;