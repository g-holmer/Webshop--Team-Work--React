import React, { useEffect, useState } from "react";

export default function GetCartItems({}) {
  let [cartItems, setCartItems] = useState([]);

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
    cartItems.map((item) => {
      console.log(cartItems);
      const itemName = item.name;
      const itemPrice = item.price;
      const itemImage = item.images[0].src.small;

      return (
        <div>
          <ul>
            <img src={itemImage} alt="" />
            <li>{itemName}</li>
            <li>Price: {itemPrice} $</li>
          </ul>
        </div>
      );
    });

  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  return (
    <div>
      <div>{productsToRender}</div>
    </div>
  );
}
