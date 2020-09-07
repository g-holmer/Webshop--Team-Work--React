import React, { useEffect, useState } from "react";
import GetCartItems from "../components/GetCartItems";
import Order from "../components/Order/Order";
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
      const itemAmount = item.amount;
      const itemImage = item.images;
      const key = window.localStorage.key(index);
      
      return (
        <GetCartItems
          itemName={itemName}
          itemPrice={itemPrice}
          itemAmount={itemAmount}
          itemImage={itemImage}
          itemKey={key}
          setDeletedItem={setDeletedItem}
        />
      );
    });

  function getTotalSum() {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].price * cartItems[i].amount;
    }
    return sum;
  }

  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  let renderOrder = null;
  let renderSum = null;
  let renderDeleteAllButton = null;

  if (localStorage.length) {
    renderSum = (
      <Sum>
        <p>Total: {getTotalSum()} $</p>
      </Sum>
    );
    renderOrder = <Order totalSum={getTotalSum()} />;
    renderDeleteAllButton = (
      <button onClick={deleteAllItemsHandler}>Delete all</button>
    );
  } else {
    renderOrder = "";
    renderSum = "";
    renderDeleteAllButton = "";
  }

  function deleteAllItemsHandler() {
    localStorage.clear();
    setDeletedItem();
  }

  return (
    <Cart>
      <h1 style={{ alignSelf: "center" }}>Your cart!</h1>

      <CartItems>{productsToRender}</CartItems>
      <DeleteAllButton>{renderDeleteAllButton}</DeleteAllButton>
      {renderSum}
      {renderOrder}
    </Cart>
  );
}
const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Cart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Sum = styled.div`
  display: flex;
  justify-content: center;
  p {
    background-color: #f2f2f2;
    border-radius: 50px;
    text-transform: uppercase;
    font-size: 30px;
  }
`;

const DeleteAllButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: red;
    border: none;
    padding: 16px 32px;
    font-size: 16px;
    border-radius: 12px;
    margin: 1em;
    cursor: pointer;
    text-transform: uppercase;
  }
`;