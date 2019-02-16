import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/becomethestars.css'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Basic from './forms/testform'

class App extends Component {
  render() {
    return (
      <fragment>
        <Banner />
        <Navbar />
      </fragment>
    );
  }
}

export default App;
