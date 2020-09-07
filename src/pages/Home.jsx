import React from "react";
import ProductList from "../components/ProductList";
import styled from "styled-components";

export default function Home() {
  return (
    <Title>
      <h1>Product List!</h1>
      <ProductList />
    </Title>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;
