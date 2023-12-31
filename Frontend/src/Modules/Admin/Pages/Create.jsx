import { FormikProvider, ErrorMessage, Field, useFormik } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../../utils/Axios";
import { toast } from "react-toastify";

let adminSchema = object({
  name: string().min(6).max(60).required(),
  email: string().email().required(),
  password: string().required().min(8).max(30),
});

const AdminCreatePage = () => {
  const createAdminCall = async (data) => {
    return axiosInstance.post("/admin", data);
  };

  const handleAdminCreate = async (data) => {
    try {
      const response = await createAdminCall(data);
      toast.success(response.data.message);
      formik.resetForm();
    } catch (error) {
      toast.error(
        error.response?.data?.message
        //// error.response && error.response.data && error.response.data.message
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: adminSchema,
    onSubmit: (values) => handleAdminCreate(values),
  });

  return (
    <>
      <FormikProvider value={formik}>
        <form>
          <label>Name</label>
          <Field name="name" />
          <ErrorMessage name="name" />
          <br />

          <label>Email</label>
          <Field name="email" />
          <ErrorMessage name="email" />
          <br />

          <label>Password</label>
          <Field name="password" />
          <ErrorMessage name="password" />
          <br />
          <button onClick={formik.handleSubmit}>Create</button>
        </form>
      </FormikProvider>
    </>
  );
};

export default AdminCreatePage;

// _______________________________________________________________________________

// Render Prop
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

// const Create = () => (
//   <div>
//     <h1>Any place in your app!</h1>
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field type="email" name="email" />
//           <ErrorMessage name="email" component="div" />
//           <Field type="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default Create;
