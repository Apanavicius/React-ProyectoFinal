import "./Header.module.css";
import { Link } from "react-router-dom";

import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Navbar } from "../navbar/Navbar";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

import React from "react";

export const Header = () => {
  return (
    <div className="logo">
      <Link to="/">
        TiendaLiBrO
        {/*<a href="https://google.com">
          <img src="./assets/img/logo.png" alt="Imagen de Libro" />
          </a>*/}
      </Link>
      <Navbar />
      <div className="">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};
