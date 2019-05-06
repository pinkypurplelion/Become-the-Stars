import React, { Component } from 'react';

class StoreHeader extends Component {
    render() {
      return (
        <div class="col-10 offset-1">
            <div class="row">
                <div class="col-4 bts-store-heading-nav">
                    <a href="/store/digital" class="bts-store-heading-nav">Digital Package</a>
                </div>
                <div class="col-4 bts-store-heading-nav">
                    <a href="/store/premium" class="bts-store-heading-nav">Premium Package</a>
                </div>
                <div class="col-4 bts-store-heading-nav">
                    <a href="/store/deluxe" class="bts-store-heading-nav">Deluxe Package</a>
                </div>
            </div>
            <hr class="bts-hr-white" />
        </div>
      );
    }
  }


export default StoreHeader;