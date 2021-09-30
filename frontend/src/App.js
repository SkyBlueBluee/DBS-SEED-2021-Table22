import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import PrivateRoute from "./components/common/use-auth"
import NavigationBar from "./components/pages/NavigationBar";
import LoginPage from "./components/pages/LoginPage";
import ProductPage from "./components/pages/ProductPage";
import CheckoutPage from "./components/pages/CheckoutPage";

function App() {
  return (
    <div>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/products">
            <ProductPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
      {
        //<CheckoutPage></CheckoutPage>
        //<ProductPage></ProductPage>
      }
    </div>
  );
}

export default App;
