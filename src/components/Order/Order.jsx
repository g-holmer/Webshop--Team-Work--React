import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Order() {
  const [inputValue, setInputValue] = useState("asd");
  const uniqueId = Date.now();

  const inputFieldHandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <p>Name:</p>
      <input onChange={inputFieldHandler} type="text" />
      <Link to={`/order/${uniqueId}/name/${inputValue}`}>
        <button>Place Order</button>
      </Link>
    </div>
  );
}
