import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import ErrorApp from "./ErrorApp";
import { ErrorBoundary } from "react-error-boundary";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="error" element={<ErrorApp />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

// const CustomNavLink = ({ to, ...props }) => {
//   let activeStyle = {
//     textDecoration: "underline",
//     color: "red",
//     transition: "all 4s",
//   };

//   return (
//     <NavLink
//       style={({ isActive }) =>
//         isActive ? activeStyle : { textDecoration: "none", color: "#c1c1e6" }
//       }
//       to={to}
//       end
//       {...props}
//     />
//   );
// };

// function Layout() {
//   return (
//     <nav>
//       <h1> React Router Test App</h1>
//       <CustomNavLink to="/home">Home</CustomNavLink> |{" "}
//       <CustomNavLink to="/about">About</CustomNavLink> |{" "}
//       <CustomNavLink to="/user">User</CustomNavLink> |{" "}
//       <CustomNavLink to="/login">Login</CustomNavLink>
//     </nav>
//   );
// }

function ErrorFallback({ error }) {
  return <ErrorApp error={error} />;
}

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token:  null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [explode, setExplode] = useState(false);

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <Header />
      <div className="App">
      {/* {!state.isAuthenticated ? <Login /> : <Home />} */}
        <ErrorBoundary
          fallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          {explode ? <ErrorApp /> : null}
          {/* <Layout /> */}
          <AppRouter />
          <button onClick={() => setExplode(true)}> toggle explode</button>
          <button onClick={() => setExplode(false)}>Go back</button>
        </ErrorBoundary>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
