import React, {Fragment, Component} from 'react';

class Thanks extends Component {
  render() {
    return (
        <Fragment>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                        <h1 class="bts-page-heading">Thank You</h1>
                        <hr class="bts-hr-white" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8 offset-xl-2 page-body">
                        <p>
                            Thanks for choosing to name your star with Become the Stars. We hope that your experience with us has been beyond brilliant. You should shortly receive an email from Paypal with a receipt for your transaction. If you've bought digital goods, you will receive an email from Become the Stars (digital@becomethestars.com) with your complete package within 24 hours of purchase. <br/> <br/>
                        </p>
                        <h1 class="package-heading text-center">Shipping Guidelines</h1> <hr class="bts-hr-white"/>
                        <p>
                            For our customers who have purchased packages including physical products, their progress can be tracked through our Order Tracker. All standard printing (certificates, posters, charts) is batch collected from our printing company on Friday each week. It will be posted on Saturday, and should hopefully arrive by Friday week. <br/> <br/> 
                            
                            Standard premium items (generic Night Sky book, Astrology poster, Astrology book, posters) are usually kept in stock. We will notify you if we have run out, and the expected date of arrival. If these items are in stock they will be posted on Saturday with your standard printing. If they are not in stock, you can elect to wait for your entire order, or to have the standard printing and premium item shipped separately. This will be of no extra cost to you. <br/><br/>
                            
                            For deluxe customised items (custom books of any kind, embossed certificates) we order them from our supplier within 24 hours of purchase, and they will be shipped directly from the supplier to you. As a result, if you have ordered a deluxe customised item, it will be shipped separately from the rest of your order. The rest of your order will be shipped according to the guidelines above.
                        </p>
                        <hr class="bts-hr-white"/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
  }
}

export default Thanks;
