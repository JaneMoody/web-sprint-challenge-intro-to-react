import React from "react";

const Header = () => {
  return (
    <div className="App-topbar">
      <center>
        <h1 style={{ fontSize: "5rem" }}>The Pokédex</h1>
        <a
          href="https://pokeapi.co/"
          style={{ fontSize: "2rem", color: "white", pointer: "cursor" }}
        >
          API HERE
        </a>
      </center>
    </div>
  );
};

export default Header;
