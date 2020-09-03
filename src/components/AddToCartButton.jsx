import React from "react";

export default function AddToCartButton({ name, price, images, id }) {
  const addToLocalStorage = () => {
    const myShoppingCart = {
      name: name,
      price: price,
      images: images,
    };

    const objectToJSON = JSON.stringify(myShoppingCart);
    localStorage.setItem(`product_${id}`, objectToJSON);
  };

  return (
    <div>
      <button onClick={addToLocalStorage}>Add to Cart</button>
    </div>
  );
}
