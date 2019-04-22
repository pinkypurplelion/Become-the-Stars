import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Helmet>
            <title>Dashboard | Become the Stars Admin</title>
        </Helmet>
        <h3>Dashboard page</h3>
      </div>
    );
  }
}
 
export default Dashboard;