import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import User from "./pages/User";
import Profile from "./pages/Profile";
import ErrorApp from "./ErrorApp";
import { ErrorBoundary } from "react-error-boundary";


const AppRouter = () => {
  return (
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
          <Route path="error" element={<ErrorApp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
  )
}

const CustomNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red",
    transition: "all 4s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none", color: "#c1c1e6" }
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

function ErrorFallback({error}) {
  return (
    <ErrorApp error={error} />
  )
}

function App() {
 
  const [explode, setExplode] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary fallbackComponent={ErrorFallback} onReset={() => setExplode(false) } resetKeys={[explode]}> 
      {explode? <ErrorApp />: null}
        <Layout />
        <AppRouter />
        <button onClick={() => setExplode(true)}> toggle explode</button>
        <button onClick={() => setExplode(false)}>Go back</button>
      </ErrorBoundary>
    </div>
  );
}

export default App;
