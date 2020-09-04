import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Order() {
  const [inputValue, setInputValue] = useState("asd");
  const uniqueId = Date.now();

  const inputFieldHandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <OrderForm>
      <p>Name:</p>
      <input onChange={inputFieldHandler} type="text" />
      <Link to={`/order/${uniqueId}/name/${inputValue}`}>
        <button>Place Order</button>
      </Link>
    </OrderForm>
  );
}

const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  align-items: center;

  input {
    width: 97%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
  }

  button {
    background-color: orange;
    border: none;
    padding: 16px 32px;
    font-size: 16px;
    border-radius: 12px;
    margin: 1em;
  }
`;
