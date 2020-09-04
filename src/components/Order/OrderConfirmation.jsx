import React, { useEffect } from "react";

const baseURL = "https://mock-data-api.firebaseio.com/e-commerce";
const orders = baseURL + "/orders/grupp-6.json";

export default function OrderConfirmation(props) {
  const userName = props.match.params.name;
  const orderId = props.match.params.id;

  const getItemFromLocalStorage = () => {
    const allProducts = [];
    for (let i = 0; i < localStorage.length; i++) {
      const productFromLS = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      );
      allProducts.push(productFromLS);
    }

    handlePostOrders(allProducts);
  };

  function handlePostOrders(products) {
    const prodList = Object.entries(products).map((productItem, index) => {
      const idNumber = parseInt(
        window.localStorage.key(index).replace(/\D/g, "")
      );

      const prodItem = {
        id: idNumber,
        name: productItem[1].name,
        amount: productItem[1].amount,
      };

      return prodItem;
    });
    const order = {
      id: orderId,
      products: prodList,
      username: userName,
    };

    const url = orders;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((order) => {});
  }
  useEffect(() => {
    getItemFromLocalStorage();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h2>Order Confirmation #{orderId}</h2>
    </div>
  );
}
