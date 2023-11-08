import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar from "../Navbar/Navigationbar";
import { useFormik } from "formik";
import { login } from "./LoginSlice";
import "../Register/Register.css";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Must have 1 uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Must have 1 lowercase letter";
  } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(values.password)) {
    errors.password = "Must have at least 1 special character";
  }

  return errors;
};

function Login() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(login({ username: values.username }));
      alert("Login success!");
    },
  });
  return (
    <div>
      <NavigationBar />
      {isLoggedIn ? (
        <div className="text-light flex-container">
          <h1 className="mt-5">Welcome {formik.values.username}</h1>
          {/* Your logged-in content goes here */}
        </div>
      ) : (
        <div className="text-light flex-container">
          <h1 className="mt-5">Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />

            <button className="btn btn-primary my-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
