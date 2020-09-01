import React,{useState} from "react";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import CartPage from "./pages/CartPage";
import { ProductContext } from './contexts/ProductContext'


function App() {
  const [renderProductState, setRenderProductState] = useState(false);

  return (
    <Layout>
      <ProductContext.Provider value={{renderProductState, setRenderProductState}}>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cart" component={ CartPage } />
      </Switch>
      </ProductContext.Provider>
    </Layout>
  );
}

export default App;
