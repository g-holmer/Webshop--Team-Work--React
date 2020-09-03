import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <nav>
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </Ul>
    </nav>
  );
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 1em;
  background-color: #55b1c6;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: orange;
    }
  }
`;
