import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Footer } from "./footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/*<Footer />*/}
    </div>
  );
};
