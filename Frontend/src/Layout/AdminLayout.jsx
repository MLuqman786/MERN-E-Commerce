import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div>
        <h1>AdminLayout</h1>
        <Header />
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
