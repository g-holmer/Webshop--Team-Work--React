import React, { useEffect } from "react";
import ProductItemDetail from "./ProductItemDetail";

import styled from "styled-components";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const baseURL = "https://mock-data-api.firebaseio.com/e-commerce";

const productList = baseURL + "/products.json";
// const productDetail = baseURL + "/products/{productId}.json";
// const productReviews = baseURL + "/reviews/{productId}.json";
// const couponCodes = baseURL + "/couponCodes/{couponCodes}.json";
// const orders = baseURL + "/orders/{GroupNumber/GroupName}.json";

export default function ProductList() {
  const { productItems, setProductItems } = useContext(ProductContext);

  function fetchProductList() {
    const url = productList;

    fetch(url)
      .then((result) => result.json())
      .then((data) => setProductItems(data));
  }

  useEffect(() => {
    fetchProductList();
    // eslint-disable-next-line
  }, []);

  let products = (
    <Products>
      {productItems &&
        Object.entries(productItems).map((product, index) => {
          const key = product[0];

          const payload = product[1];

          return (
            <ProductItemDetail
              key={index}
              name={payload.name}
              description={payload.description}
              price={payload.price}
              images={payload.images}
              index={key}
            />
          );
        })}
    </Products>
  );

  return <ProductsWrapper>{products}</ProductsWrapper>;
}

const Products = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: repeat(100px, 1fr);
`;
const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7%;
`;
