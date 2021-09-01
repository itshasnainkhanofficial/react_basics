import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
function Reduxparent() {
    return (
        <div >
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="*">
              <h1>Page not found</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    )
}

export default Reduxparent
