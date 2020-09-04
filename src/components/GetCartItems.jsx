import React from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";

export default function GetCartItems({
  itemImage,
  itemName,
  itemPrice,
  itemAmount,
  itemKey,
  setDeletedItem,
}) {
  function deleteHandler() {
    window.localStorage.removeItem(itemKey);
    setDeletedItem();
  }

  return (
    <>
      <CartItem>
        <Img>
          <img src={itemImage} alt="" srcSet="" />
        </Img>
        <ItemName>{itemName}</ItemName>
        <ItemPrice>Price: {itemPrice} $</ItemPrice>
        <ItemAmount>Amount: {itemAmount}</ItemAmount>
        <DeleteButton deleteItem={deleteHandler} />
      </CartItem>
    </>
  );
}
const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;

  margin: 10px 20px 5px 20px;
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
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const ItemPrice = styled.p`
  margin-left: 5px;
  display: flex;
  align-items: center;
`;

const ItemAmount = styled.p`
margin-left: 5px;
  display: flex;
  align-items: center;
`;
