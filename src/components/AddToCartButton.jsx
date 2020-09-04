import React from "react";
import styled from "styled-components";

export default function AddToCartButton({ name, price, images, id, amount }) {
  const addToLocalStorage = () => {
    const myShoppingCart = {
      name: name,
      price: price,
      images: images,
      amount: amount,
    };

    const objectToJSON = JSON.stringify(myShoppingCart);
    localStorage.setItem(`product_${id}`, objectToJSON);
  };

  return (
    <div>
      <Button onClick={addToLocalStorage}>Add to Cart</Button>
    </div>
  );
}

const Button = styled.button`
background-color: orange;
border: none;
padding: 16px 32px;
font-size: 16px;
border-radius: 12px;
margin:1em;
`;