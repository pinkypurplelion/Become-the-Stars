import React, { Component } from 'react';
import {Link} from "react-router-dom";

class StoreHeader extends Component {
    render() {
      return (
        <div class="col-10 offset-1">
            <div class="row">
                <div class="col-4 bts-store-heading-nav">
                    <Link class="bts-store-heading-nav" to="/store/digital">Digital Package</Link>
                </div>
                <div class="col-4 bts-store-heading-nav">
                <Link class="bts-store-heading-nav" to="/store/premium">Premium Package</Link>

                </div>
                <div class="col-4 bts-store-heading-nav">
                <Link class="bts-store-heading-nav" to="/store/deluxe">Deluxe Package</Link>

                </div>
            </div>
            <hr class="bts-hr-white" />
        </div>
      );
    }
  }


export default StoreHeader;