import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
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

        <h2>{name}</h2>
      </Link>
      <p>{description}</p>
      <label htmlFor="product">Amount:</label>
      <select id="product" name="product">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>Price: {price} $</p>
      <AddToCartButton  name={name} price={price} images={images} id={index}/>
    </Product>
  );
}

const Product = styled.div`
display: grid; 
justify-items:center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

select {
  display: block;
  padding: .6em 1.4em .5em .8em;
  max-width: 100%;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
}

h2 {
text-align:center;
}

p {
padding:0 1em 0 1em; 
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;

const ImageWrapper = styled.div`
  height: 250px;
`;

