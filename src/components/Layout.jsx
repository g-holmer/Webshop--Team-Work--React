import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>{children}</main>

      <Footer>Made by Group 6</Footer>
    </div>
  );
}

const Footer = styled.p`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0.5em;
  background-color: #55b1c6;
`;
