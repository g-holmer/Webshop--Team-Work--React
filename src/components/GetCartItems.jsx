import React from "react";
import styled from "styled-components";
export default function GetCartItems({ itemImage, itemName, itemPrice }) {
  return (
    <CartItem>
      <Img>
        <img src={itemImage} alt="" srcSet="" />
      </Img>
      <p>{itemName}</p>
      <p>Price: {itemPrice} $</p>
    </CartItem>
  );
}
const CartItem = styled.div`
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Img = styled.div`
  width: 170px;
  height: 170px;
`;
