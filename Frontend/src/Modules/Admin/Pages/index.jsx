import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/Axios";
import { toast } from "react-toastify";

const AdminIndexPage = async () => {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  const getAdminCall = () => {
    return axiosInstance.get("/admins");
  };

  const fetchData = async () => {
    try {
      const response = await getAdminCall();
      console.log(response.data.data);
      setAdmins(response.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Admin Index Page</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {admins.map((admin, index) => (
          <tr key={index}>
            <td>{admin.id}</td>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
              <button
                onClick={() => navigate("/admin/" + admin.id + "/update")}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default AdminIndexPage;
