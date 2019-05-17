import React, { Component } from "react";
import {Helmet} from "react-helmet";
import MainPremium from './../forms/MainPremium'
import StoreHeader from './../components/store-header'
import {Link} from "react-router-dom";


import StarPremium from './../static/images/star-premium.jpg';
import StarPremiumBanner from './../static/images/star-premium-banner.jpg';


class Digital extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Premium Gift Package | Become the Stars</title>
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
                            <img src={StarPremium} alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Premium Package
                            </h1>
                            <h1 class="package-price">
                                Starting from $30
                            </h1>
                            <p class="package-options">
                              Our premium package is the perfect gift package for birthdays, christmas or the most special of occasions. We will print and ship your package to you on high quality paper, providing a timeless gift for your loved one. You also recieve digital copies of all printed items along with digital specific extras. This package includes printed copies of:
                              <ul>
                                  <li>A certificate of registration</li>
                                  <li>An image of your registered star</li>
                                  <li>A star chart portraying the night sky</li>
                                  <li>A star fact sheet</li>
                              </ul>

                              This package also includes digital only copies of:
                              <ul>
                                  <li>Space Appreciation Book</li>
                                  <li>Star Appreciation Book</li>
                                  <li>Star chart software</li>
                              </ul>
                              If you would like printed copies of these books along with other deluxe items, consider upgrading to our <Link to="/store/deluxe" style={{color: "grey"}}>Deluxe Gift Package.</Link> 
                              
                              <hr class="bts-hr-white" />

                              If your special someone is interested in astrology (including things like Zodiac Signs), then you can opt for our Astrology package. This upgrade includes high quality printed items including:
                              <ul>
                                  <li>A poster with a symbol of their Zodiac Sign and inspirational quote</li>
                                  <li>Specialty matching of your star to your Zodiac Sign</li>
                                  <li>Access to our exclusive Digital Star Gazers club</li>
                              </ul>

                              <hr class="bts-hr-white" />

                              We offer discounted access to software, games and programs which relate to space, stars and our universe. Please check the compatibility of your computer with the software on their website, linked in the form and below:
                              <ul>
                                  <li>Universe Sandbox 2 - $30.00 (<a href="http://universesandbox.com/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                                  <li>Kerbal Space Program - $40.00 (<a href="https://www.kerbalspaceprogram.com/product/kerbal-space-program/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                              </ul>
                              All prices are listed in Australian Dollars and offer at least a $5.00 discount from their standard prices listed on <a href="https://store.steampowered.com" style={{color: "grey"}} target="_blank">Steam</a> as of 6 May 2019.
                            </p>
                        </div>
                        <div class='col-8'>
                            <MainPremium />
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
                            <img src={StarPremiumBanner} alt="" class="img-fluid"/>
                            <hr class="bts-hr-white"/>
                            <h1 class="package-heading-form">
                                Premium Package
                            </h1>
                            <h1 class="package-price">
                                Starting from $30
                            </h1>
                            <p class="package-options">
                              Our premium package is the perfect gift package for birthdays, christmas or the most special of occasions. We will print and ship your package to you on high quality paper, providing a timeless gift for your loved one. You also recieve digital copies of all printed items along with digital specific extras. This package includes printed copies of:
                              <ul>
                                  <li>A certificate of registration</li>
                                  <li>An image of your registered star</li>
                                  <li>A star chart portraying the night sky</li>
                                  <li>A star fact sheet</li>
                              </ul>

                              This package also includes digital only copies of:
                              <ul>
                                  <li>Space Appreciation Book</li>
                                  <li>Star Appreciation Book</li>
                                  <li>Star chart software</li>
                              </ul>
                              If you would like printed copies of these books along with other deluxe items, consider upgrading to our <Link to="/store/deluxe" style={{color: "grey"}}>Deluxe Gift Package.</Link> 
                              
                              <hr class="bts-hr-white" />

                              If your special someone is interested in astrology (including things like Zodiac Signs), then you can opt for our Astrology package. This upgrade includes high quality printed items including:
                              <ul>
                                  <li>A poster with a symbol of their Zodiac Sign and inspirational quote</li>
                                  <li>Specialty matching of your star to your Zodiac Sign</li>
                                  <li>Access to our exclusive Digital Star Gazers club</li>
                              </ul>

                              <hr class="bts-hr-white" />

                              We offer discounted access to software, games and programs which relate to space, stars and our universe. Please check the compatibility of your computer with the software on their website, linked in the form and below:
                              <ul>
                                  <li>Universe Sandbox 2 - $30.00 (<a href="http://universesandbox.com/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                                  <li>Kerbal Space Program - $40.00 (<a href="https://www.kerbalspaceprogram.com/product/kerbal-space-program/" style={{color: "grey"}} target="_blank">Store Page</a>)</li>
                              </ul>
                              All prices are listed in Australian Dollars and offer at least a $5.00 discount from their standard prices listed on <a href="https://store.steampowered.com" style={{color: "grey"}} target="_blank">Steam</a> as of 6 May 2019.
                            </p>
                            <hr class="bts-hr-white" />
                        </div>
                        <div class='col-12'>
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