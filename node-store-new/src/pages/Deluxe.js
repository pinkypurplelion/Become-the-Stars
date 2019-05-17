import React, { Component } from "react";
import {Helmet} from "react-helmet";
import MainDeluxe from './../forms/MainDeluxe'
import StoreHeader from './../components/store-header'

import StarDeluxe from './../static/images/star-deluxe.jpg';
import StarDeluxeBanner from './../static/images/star-deluxe-banner.jpg';

class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Deluxe Gift Package | Become the Stars</title>
        </Helmet>

        <div class="container-fluid">
          <div class="row">
            <StoreHeader />
          </div>

          {/* Desktop & Tablet Devices */}
          <div class="row d-none d-sm-block d-md-block">
            <div class='col-10 offset-1'>
                    <div class="row">
                        <br/>
                        <div class='col-4'>
                            <img src={StarDeluxe} alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $65
                            </h1>
                            <p class="package-options">
                            <hr class="bts-hr-white" />
                              Our delux package is for those who go above and beyond. It is the ultimate display of love and affection, the gift of the stars in the most magnificent way. Your loved ones will enjoy this exclusive gift for any occasion. This package includes printed copies of:
                              <ul>
                                  <li>A certificate of registration</li>
                                  <li>Embossed certificate & custom envelope</li>
                                  <li>An image of your registered star</li>
                                  <li>A star chart portraying the night sky</li>
                                  <li>A star fact sheet</li>
                                  <li>Space Appreciation Book</li>
                                  <li>Star Appreciation Book</li>
                                  <li>Star chart software</li>
                              </ul>
                              The books are paperback as standard, but can be upgraded to hardcover if preferred.
                              
                              <hr class="bts-hr-white" />

                              If your special someone is interested in astrology (including things like Zodiac Signs), our Astrology package is included in this packge. It includes includes high quality printed items including:
                              <ul>
                                  <li>A poster with a symbol of their Zodiac Sign and inspirational quote</li>
                                  <li>A small token of their zodiac sign</li>
                                  <li>Specialty matching of your star to your Zodiac Sign</li>
                                  <li>Access to our exclusive Digital Star Gazers club</li>
                              </ul>
                              
                              <hr class="bts-hr-white" />

                              We offer discounted access to software, games and programs which relate to space, stars and our universe. Please check the compatibility of your computer with the software on their website, linked in the form and below:
                              <ul>
                                  <li>Universe Sandbox 2 - $30.00 (<a href="http://universesandbox.com/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                                  <li>Kerbal Space Program - $40.00 (<a href="https://www.kerbalspaceprogram.com/product/kerbal-space-program/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                                  <li>Space Engineers - $20.00 (<a href="https://www.spaceengineersgame.com" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                              </ul>
                              All prices are listed in Australian Dollars and offer at least a $5.00 discount from their standard prices listed on <a href="https://store.steampowered.com" style={{color: "grey"}} target="_blank">Steam</a> as of 6 May 2019.
                            </p>
                        </div>
                        <div class='col-8'>
                            <MainDeluxe />
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
                            <img src={StarDeluxeBanner} alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Package Description
                            </h1>
                            <h1 class="package-price">
                                Starting from $65
                            </h1>
                            <p class="package-options">
                            <hr class="bts-hr-white" />
                              Our delux package is for those who go above and beyond. It is the ultimate display of love and affection, the gift of the stars in the most magnificent way. Your loved ones will enjoy this exclusive gift for any occasion. This package includes printed copies of:
                              <ul>
                                  <li>A certificate of registration</li>
                                  <li>Embossed certificate & custom envelope</li>
                                  <li>An image of your registered star</li>
                                  <li>A star chart portraying the night sky</li>
                                  <li>A star fact sheet</li>
                                  <li>Space Appreciation Book</li>
                                  <li>Star Appreciation Book</li>
                                  <li>Star chart software</li>
                              </ul>
                              The books are paperback as standard, but can be upgraded to hardcover if preferred.
                              
                              <hr class="bts-hr-white" />

                              If your special someone is interested in astrology (including things like Zodiac Signs), our Astrology package is included in this packge. It includes includes high quality printed items including:
                              <ul>
                                  <li>A poster with a symbol of their Zodiac Sign and inspirational quote</li>
                                  <li>A small token of their zodiac sign</li>
                                  <li>Specialty matching of your star to your Zodiac Sign</li>
                                  <li>Access to our exclusive Digital Star Gazers club</li>
                              </ul>
                              
                              <hr class="bts-hr-white" />

                              We offer discounted access to software, games and programs which relate to space, stars and our universe. Please check the compatibility of your computer with the software on their website, linked in the form and below:
                              <ul>
                                  <li>Universe Sandbox 2 - $30.00 (<a href="http://universesandbox.com/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                                  <li>Kerbal Space Program - $40.00 (<a href="https://www.kerbalspaceprogram.com/product/kerbal-space-program/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                                  <li>Space Engineers - $20.00 (<a href="https://www.spaceengineersgame.com" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                              </ul>
                              All prices are listed in Australian Dollars and offer at least a $5.00 discount from their standard prices listed on <a href="https://store.steampowered.com" style={{color: "grey"}} target="_blank">Steam</a> as of 6 May 2019.
                            </p>
                            <hr class="bts-hr-white" />
                        </div>
                        <div class='col-12'>
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