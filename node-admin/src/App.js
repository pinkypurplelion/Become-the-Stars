import React, { Component } from 'react';
import './css/App.css';
import {
  Route,
  HashRouter,
} from "react-router-dom";
import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <body>
          <div>
            <Route exact path="/" component={Home} />
          </div>
        </body>
      </HashRouter>
    );
  }
}

export default App;
