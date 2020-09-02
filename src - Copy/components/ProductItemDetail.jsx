import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// name={payload.name}
// description={payload.description}
// price={payload.price}
// images={payload.images}

export default function ProductItemDetail({
  name,
  description,
  price,
  images,
  index,
}) {
  const renderImage = images.map((image) => {
    return image.src.small;
  });

  return (
    <Product>
      <Link to={`/product/${index}`}>
        <ImageWrapper>
          <img src={renderImage} alt="" srcSet="" />
        </ImageWrapper>

        <h5>{name}</h5>
      </Link>
      <p>{description}</p>
      <label htmlFor="product">Amount:</label>
      <select id="product" name="product">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>Price: {price} dollar</p>
      <button>Add to Cart</button>
    </Product>
  );
}

const Product = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageWrapper = styled.div`
  height: 250px;
`;
