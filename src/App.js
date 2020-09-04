import React, { useState } from "react";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductItemInfo from "./components/ProductItemInfo";
import CartPage from "./pages/CartPage";
import { OrderContext } from "./contexts/OrderContext";
import OrderConfirmation from "./components/Order/OrderConfirmation";

function App() {
  const [productItems, setProductItems] = useState({});
  // const [productName, setProductName] = useState({});

  return (
    <Layout>
      <OrderContext.Provider
        value={{
          productItems,
          setProductItems,
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={CartPage} />
          <Route path="/product/:id" exact component={ProductItemInfo} />
          <Route
            path="/order/:id/name/:name"
            exact
            component={OrderConfirmation}
          />
        </Switch>
      </OrderContext.Provider>
    </Layout>
  );
}

export default App;
