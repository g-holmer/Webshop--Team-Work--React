import React from "react";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductItemInfo({ match }) {
  //   const { productItems } = useContext(ProductContext);
  const productId = match && match.params.id;
  const [product, setProduct] = useState({});
  const [productReviewsData, setProductReviewsData] = useState({});

  //   console.log(match);
  //   const name = productItems[Object.keys(productItems)[productIndex]].name;
  //   const description =
  //     productItems[Object.keys(productItems)[productIndex]].description;
  //   const images = productItems[Object.keys(productItems)[productIndex]].images;
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
  }, []);

  const name = product.name;
  const description = product.description;
  const image = product.images && product.images[0].src.small;

  const renderProductReviews = Object.entries(productReviewsData).map(
    (review) => {
      const author = review[1].author.name;
      const title = review[1].title;
      const date = review[1].date;
      const description = review[1].description;
      const rating = review[1].rating;
      return (
        <div>
          <li>{author}</li>
          <li>{title}</li>
          <li>{date}</li>
          <li>{description}</li>
          <li>{rating}</li>
        </div>
      );
    }
  );
  return (
    <div>
      <div>
        <img src={image} alt="" srcSet="" />
      </div>
      <div>{name}</div>
      <div>{description}</div>
      <button>Add to Cart</button>

      {renderProductReviews}
    </div>
  );
}
