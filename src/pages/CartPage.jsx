import React, { useEffect, useState } from "react";
import GetCartItems from "../components/GetCartItems";
import styled from "styled-components";

export default function CartPage() {
  let [cartItems, setCartItems] = useState([]);

  const setDeletedItem = () => {
    getItemFromLocalStorage();
  };
  const getItemFromLocalStorage = () => {
    const allProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const productFromLS = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      );
      allProducts.push(productFromLS);
    }

    setCartItems(allProducts);
  };

  const productsToRender =
    cartItems &&
    cartItems.map((item, index) => {
      const itemName = item.name;
      const itemPrice = item.price;
      const itemImage = item.images;
      const key = window.localStorage.key(index);

      return (
        <GetCartItems
          itemName={itemName}
          itemPrice={itemPrice}
          itemImage={itemImage}
          itemKey={key}
          setDeletedItem={setDeletedItem}
        />
      );
    });

  let sum = 0;
  for (let i = 0; i < cartItems.length; i++) {
    sum += cartItems[i].price;
  }

  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  return (
    <Cart>
      <h1 style={{ alignSelf: "center" }}>Your cart!</h1>

      <CartItems>{productsToRender}</CartItems>

      <p>Total: {sum} $</p>
    </Cart>
  );
}
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const Cart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
