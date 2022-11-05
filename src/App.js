import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
// import AppRouter from "./routes/index";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import User from "./pages/User";
import Profile from "./pages/Profile";
import ErrorFallback from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
    transition: "all 4s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none", color: "blue" }
      }
      to={to}
      end
      {...props}
    />
  );
};

function Layout() {
  return (
    <nav>
      <h1> React Router Test App</h1>
      <CustomNavLink to="/home">Home</CustomNavLink> |{" "}
      <CustomNavLink to="/about">About</CustomNavLink> |{" "}
      <CustomNavLink to="/contactUs">Contact Us</CustomNavLink> |{" "}
      <CustomNavLink to="/user">User</CustomNavLink>
    </nav>
  );
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary fallbackComponent={ErrorFallback}>
        <Layout />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/user" element={<User />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        ;{/* <Layout  /> */}
        {/* <Outlet /> */}
        {/* <AppRouter /> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
