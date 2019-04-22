import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import ReactGA from 'react-ga'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/bts.css"

ReactGA.initialize('UA-134673643-1')

ReactDOM.render(
  <Main />,
  document.getElementById("root")
);