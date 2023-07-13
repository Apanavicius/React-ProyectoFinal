import { navbarLinks } from "../../../routes/navbarLinks";
// import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./Navbar.module.css";
import { Link } from "react-router-dom";

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

export const Navbar = () => {
  return (
    /*<header>
      <div className="logo">
        <Link to="/">
          <span>TiendaLiBrO</span>
          <a href="https://google.com">
            <img src="./assets/img/logo.png" alt="Imagen de Libro" />
          </a>
        </Link>
      </div>*/

    <nav className="container-navbar">
      <ul className="categories">
        {navbarLinks.map(({ id, to, label }) => (
          <Link key={id} to={to}>
            {label}
          </Link>
        ))}
      </ul>

      {/*<div className="">
          <Link to="/cart">
            <CartWidget />
          </Link>
          </div>*/}
    </nav>
    //</header>
  );
};
