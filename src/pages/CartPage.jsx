import React, { useEffect, useState } from "react";

export default function CartPage({}) {

  let [cartItems, setCartItems] = useState([]);

  const getItemFromLocalStorage = () => {
    const allProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const productFromLS = JSON.parse(localStorage.getItem(localStorage.key(i)));
    allProducts.push(productFromLS);
    }

    setCartItems(allProducts);
  };

  const productsToRender = cartItems && cartItems.map((item) => {
    console.log(cartItems);
    const itemName = item.name;
    const itemPrice = item.price;
    const itemImage = item.images[0] && item.images[0].src.small;

    return (
      <div>
      <ul>
        <li>{itemName}</li>
      </ul>
      <div>{itemImage}</div>
      </div>
  )})


useEffect(() => {
  getItemFromLocalStorage()
}, [])

  return (
    <div>
      <h1>Your cart!</h1>
      <div>{productsToRender}</div>
    </div>
  );
}
