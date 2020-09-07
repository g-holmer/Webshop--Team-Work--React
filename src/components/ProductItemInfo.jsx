import React from "react";
import { useState, useEffect } from "react";

import AddToCartButton from "./AddToCartButton";
import styled from "styled-components";

export default function ProductItemInfo({ match }) {
  const productId = match && match.params.id;
  const [product, setProduct] = useState({});
  const [productReviewsData, setProductReviewsData] = useState({});
  
  const baseURL = "https://mock-data-api.firebaseio.com/e-commerce";
  const productReviews = baseURL + `/reviews/${productId}.json`;
  const productDetail = baseURL + `/products/${productId}.json`;

  function fetchProduct() {
    const url = productDetail;

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        setProduct(data);
      });
  }
  function fetchProductReviews() {
    const url = productReviews;

    fetch(url)
      .then((result) => result.json())
      .then((data) => setProductReviewsData(data));
  }

  useEffect(() => {
    fetchProduct();
    fetchProductReviews();
    // eslint-disable-next-line
  }, []);

  let title = product.name;
  let productPrice = product.price;
  const description = product.description;
  const image = product.images && product.images[0].src.small;

  const renderProductReviews =
    productReviewsData &&
    Object.entries(productReviewsData).map((review) => {
      const author = review[1].author.name;
      const title = review[1].title;
      const date = review[1].date;
      const description = review[1].description;
      const rating = review[1].rating;

      return (
        <Reviewwrapper>
          <li>{date}</li>
          <li>{author}</li>
          <li>{title}</li>
          <li>{description}</li>
          <li>{rating}</li>
        </Reviewwrapper>
      );
    });
  return (
    <Product>
      <ProductWrapper>
        <div>
          <img src={image} alt="" srcSet="" />
        </div>

        <ProductInfoWrapper>
          <div>{title}</div>
          <div>{description}</div>
          <div>Price: {productPrice} $</div>
          <AddToCartButton
            name={title}
            price={productPrice}
            images={image}
            id={productId}
            amount={1}
          />
        </ProductInfoWrapper>
      </ProductWrapper>
      {renderProductReviews}
    </Product>
  );
}

const Product = styled.div`
  display: grid;
  grid-template-rows: 1fr, 1fr;
  margin: 1rem;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 1rem;

  h2 {
    margin: 2em;
    text-align: center;
  }

  p {
    margin: 2em;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 600px;
    max-width: 500px;
  }
`;

const ProductInfoWrapper = styled.div`
  display: grid;
  flex-direction: colum;
`;

const Reviewwrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1em;

  li {
    list-style-type: none;
    padding: 10px;
    background: #cce5ff;
    margin-bottom: 1em;
  }
`;
