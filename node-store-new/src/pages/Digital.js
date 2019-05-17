import React, { Component } from "react";
import {Helmet} from "react-helmet";
import MainDigital from './../forms/MainDigital'
import StoreHeader from './../components/store-header'

import StarDigital from './../static/images/star-digital.jpg';
import StarDigitalBanner from './../static/images/star-digital-banner.jpg'


class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Digital Gift Package | Become the Stars</title>
        </Helmet>

        <div class="container-fluid">
          <div class="row">
            <StoreHeader />
          </div>
          {/* Desktop and Tablet Devices */}
          <div class="row d-none d-sm-block d-md-block">
            <div class='col-10 offset-1'>
                    <div class="row">
                        <br/>
                        <div class='col-4'>
                            <img src={StarDigital} alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $15
                            </h1>
                            <p class="package-options">
                              Our digital package is perfect for those who want to print their own certificates and posters, or are buying for someone who has embraced the digital age. Not only will you be able to name a star, but will also receive our digital gift package which includes high quality digital downloads of:
                              <ul>
                                  <li>A certificate of registration</li>
                                  <li>An image of your registered star</li>
                                  <li>A star chart portraying the night sky</li>
                                  <li>A star fact sheet</li>
                              </ul>
                              
                              <hr class="bts-hr-white" />

                              If your special someone is interested in astrology (including things like Zodiac Signs), then you can opt for our Astrology package. This upgrade includes not only high quality digital downloads of the items listed above, but also:
                              <ul>
                                  <li>A poster with a symbol of their Zodiac Sign and inspirational quote</li>
                                  <li>Specialty matching of your star to your Zodiac Sign</li>
                                  <li>Access to our exclusive Digital Star Gazers club</li>
                              </ul>
                            </p>
                        </div>
                        <div class='col-8'>
                            <MainDigital />
                        </div>
                    </div>
                </div>
          </div>
          
          {/* Mobile Devices */}
          <div class="row d-block d-sm-none d-md-none">
            <div class='col-12'>
              <div class="row">
                <br/>
                <div class='col-12'>
                  <img src={StarDigitalBanner} alt="" class="img-fluid"/>
                  <hr class="bts-hr-white"/>
                  <h1 class="package-heading-form">
                      Package Description
                  </h1>
                  <h1 class="package-price">
                      Starting from $15
                  </h1>
                  <p class="package-options">
                    Our digital package is perfect for those who want to print their own certificates and posters, or are buying for someone who has embraced the digital age. Not only will you be able to name a star, but will also receive our digital gift package which includes high quality digital downloads of:
                    <ul>
                        <li>A certificate of registration</li>
                        <li>An image of your registered star</li>
                        <li>A star chart portraying the night sky</li>
                        <li>A star fact sheet</li>
                    </ul>
                    
                    <hr class="bts-hr-white" />

                    If your special someone is interested in astrology (including things like Zodiac Signs), then you can opt for our Astrology package. This upgrade includes not only high quality digital downloads of the items listed above, but also:
                    <ul>
                        <li>A poster with a symbol of their Zodiac Sign and inspirational quote</li>
                        <li>Specialty matching of your star to your Zodiac Sign</li>
                        <li>Access to our exclusive Digital Star Gazers club</li>
                    </ul>
                  </p>
                  <hr class="bts-hr-white" />
                </div>
                <div class='col-12'>
                    <MainDigital />
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