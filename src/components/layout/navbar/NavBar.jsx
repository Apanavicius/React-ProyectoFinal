import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "../navbar/NavBar.module.css";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <h5>Logo</h5>
        <ul className={styles.categories}>
          <li>Todas</li>
          <li>algo01</li>
          <li>algo02</li>
        </ul>

        <Badge badgeContent={4} color="primary">
          <BsFillCartCheckFill size="30px" />
        </Badge>
      </div>
      <Outlet />
    </>
  );
};
