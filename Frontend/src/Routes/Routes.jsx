import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import AdminLayout from "../Layout/AdminLayout";
import Create from "../Modules/Admin/Pages/Create";
import AdminCreateLayout from "../Modules/Admin/Pages/Create";
import LoginPage from "../Modules/Auth/Page/Login";
import ProductIndexPage from "../Modules/Product/Page/indexProduct";
import ProductCreatePage from "../Modules/Product/Page/createProduct";
import AdminCreatePage from "../Modules/Admin/Pages/Create";
import AdminIndexPage from "../Modules/Admin/Pages";
import AdminUpdatePage from "../Modules/Admin/Pages/Update";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<AdminLayout />}>
            <Route path="/product/index" element={<ProductIndexPage />} />
            <Route path="/product/create" element={<ProductCreatePage />} />
            <Route path="/admin/create" element={<AdminCreatePage />} />
            <Route path="/admin/index" element={<AdminIndexPage />} />
            <Route path="/admin/index" element={<AdminUpdatePage />} />
          </Route>

          {/* <Route path="/create" element={<Create />} /> */}

          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;
