import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.module.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="container-navbar">
        <Link to="/">
          <h2 className="logo">
            Tienda<span>Libro</span>
          </h2>
        </Link>
        <ul className="categories">
          <Link to="/">Todas</Link>
          <Link to="/category/Finanza Personal">Finanzas</Link>
          <Link to="/category/Aventura">Ficción|Aventuras</Link>
          <Link to="/category/Psicología Deportiva">Psicología Deportiva</Link>
          <Link to="/category/Desarrollo Personal">Desarrollo Personal</Link>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};
