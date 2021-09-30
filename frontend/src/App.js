import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/pages/LoginPage";
import ProductPage from "./components/pages/ProductPage";
import CheckoutPage from "./components/pages/CheckoutPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact balance="/products">
            <ProductPage />
          </Route>
          <Route exact balance="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
      <LoginPage></LoginPage>
      {
        //<CheckoutPage></CheckoutPage>
        //<ProductPage></ProductPage>
      }
    </div>
  );
}

export default App;
