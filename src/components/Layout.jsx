import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>{children}</main>

      <footer>
        <p>Made by Group 6</p>
      </footer>
    </div>
  );
}
