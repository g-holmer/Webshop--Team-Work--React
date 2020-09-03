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

      <Footer>
        <p>Made by Group 6</p>
        </Footer>
    </div>
  );
}

const Footer = styled.p`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0.5em;
  background-color:#55B1C6;
`;