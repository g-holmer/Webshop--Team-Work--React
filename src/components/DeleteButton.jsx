import React from "react";
import styled from "styled-components";

export default function DeleteButton({ deleteItem }) {
  return <Button onClick={deleteItem}>X</Button>;
}

const Button = styled.button`
  background-color: red;
  border: none;
  padding: 0px 10px;
  font-size: 16px;
  margin: 4em;
`;
