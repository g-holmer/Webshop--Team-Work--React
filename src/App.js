import React, { useState } from "react";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductItemInfo from "./components/ProductItemInfo";
import CartPage from "./pages/CartPage";
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [productItems, setProductItems] = useState({});

  return (
    <Layout>
      <ProductContext.Provider
        value={{
          productItems,
          setProductItems,
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:id" exact component={ProductItemInfo} />
        </Switch>
      </ProductContext.Provider>
    </Layout>
  );
}

export default App;
