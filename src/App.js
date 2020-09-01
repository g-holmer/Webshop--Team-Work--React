import React from "react";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cart" component={ CartPage } />
      </Switch>
    </Layout>
  );
}

export default App;
