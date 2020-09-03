import React from "react";
import styled from "styled-components";
export default function GetCartItems({ itemImage, itemName, itemPrice }) {
  return (
    <CartItem>
      <Img>
        <img src={itemImage} alt="" srcSet="" />
      </Img>
      <ItemName>{itemName}</ItemName>
      <ItemPrice>Price: {itemPrice} $</ItemPrice>
    </CartItem>
  );
}
const CartItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px;
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

const ItemName = styled.p`
  display: flex;
  align-items: center;
`;

const ItemPrice = styled.p`
  display: flex;
  align-items: center;
`;
