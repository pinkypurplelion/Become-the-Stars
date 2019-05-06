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
      <div class="container-fluid buffer-cont">
        <div class="row">
            <h1>Promos in database</h1>
        </div>
        <div class="row">
          <Helmet>
              <title>Database | Become the Stars Admin</title>
          </Helmet>
          <div class="col-8">
            <ul>
              {promos.map(promo => (
                <li key={promo.code}>
                  {promo.code} {promo.discount}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class="row">
            <h1>Add promo to database</h1>
        </div>
        <div class="row">
          <div class="col-8 offset-2">
            <form>
              <div class="form-group">
                <label for="promocode">Promo code</label>
                <input type="text" class="form-control" id="promocode" aria-describedby="emailHelp" placeholder="promocode" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
    }
  }
}
 
export default Database;