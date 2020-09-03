import React, { useEffect, useState } from "react";
import GetCartItems from "../components/GetCartItems";
export default function CartPage({}) {
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
      const itemName = item.name;
      const itemPrice = item.price;
      const itemImage = item.images[0].src.large;

      return (
        <GetCartItems
          itemName={itemName}
          itemPrice={itemPrice}
          itemImage={itemImage}
        />
      );
    });

  useEffect(() => {
    getItemFromLocalStorage();
  }, []);

  return (
    <div>
      <h1>Your cart!</h1>
      {productsToRender}
    </div>
  );
}
