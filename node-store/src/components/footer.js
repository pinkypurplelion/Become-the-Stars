import React, { Component } from 'react';
import './../css/bootstrap.min.css'
import './../css/becomethestars.css'

class Footer extends Component {
  render() {
    return (
        <footer class="">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-6 offset-xl-3 text-center">
                        Home | Store | Contact <br/>
                        Copyright Become the Stars 2019 <br/>
                        Image Credit: NASA/JPL-Caltech/UCLA/ESA/STScI/CXC
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;