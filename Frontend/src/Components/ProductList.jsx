import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const NavLinkCSS = ({ isActive }) => {
    return isActive
      ? { color: "Yellow" }
      : {
          color: "white",
          fontSize: isActive ? "40px" : "15px",
        };
  };
  return (
    <>
      <div>
        <h1 className="justify-around flex bg-slate-500 text-white  p-3 ">
          Welcome To Products
        </h1>
      </div>
      <nav className="justify-around flex bg-blue-500 text-white  p-2 ">
        <NavLink style={NavLinkCSS} to="shirts">
          Shirts
        </NavLink>
        <NavLink style={NavLinkCSS} to="jeans">
          Jeans
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
