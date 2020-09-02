import React from "react";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductItemInfo({ match }) {
  const { productItems } = useContext(ProductContext);
  const productIndex = match && match.params.id;
  console.log(match);
  const name = productItems[Object.keys(productItems)[productIndex]].name;
  const description =
    productItems[Object.keys(productItems)[productIndex]].description;
  const images = productItems[Object.keys(productItems)[productIndex]].images;

  console.log(productItems);
  //   const productReviews = baseURL + "/reviews/{productId}.json";

  return (
    <div>
      <div>
        <img src={images[0].src.small} alt="" srcset="" />
      </div>
      <div>{name}</div>
      <div>{description}</div>
      <button>Add to Cart</button>
    </div>
  );
}
