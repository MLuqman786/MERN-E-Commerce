import { object, string } from "yup";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { useEffect } from "react";
let loginSchema = object({
  email: string().email().required(),
  password: string().required().min(8).max(25),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => console.log("This is login values", values),
  });
  const { values } = formik;

  useEffect(() => console.log("values", values), [values]);

  return (
    <FormikProvider value={formik}>
      <form>
        <label>Email</label>
        <Field name="email" />
        <ErrorMessage name="email" />
        <label>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button onClick={formik.handleSubmit}>login</button>
      </form>
    </FormikProvider>
  );
};

export default LoginPage;
