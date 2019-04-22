import React, { Component } from "react";
import {Helmet} from "react-helmet";

class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      promos: ''
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/get/authid/promos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            promos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
        
    const { error, isLoaded, promos } = this.state;
    if (error) {
      return <div><br /> <br />Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div><br /> <br />Loading...</div>;
    } else {
    return (
      <div>
        <Helmet>
            <title>Database | Become the Stars Admin</title>
        </Helmet>
        <br /> <br />
        <h1>Database page</h1>
        <ul>
          {promos.map(promo => (
            <li key={promo.code}>
              {promo.code} {promo.discount}
            </li>
          ))}
        </ul>
      </div>
    );
    }
  }
}
 
export default Database;