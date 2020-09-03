import React from "react";

export default function DeleteButton({ deleteItem }) {
  return <button onClick={deleteItem}>X</button>;
}
