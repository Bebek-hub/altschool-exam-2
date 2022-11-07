
// const AuthContext = createContext();
import React, { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();
const UserAuthContext = ({ children }) => {
  const [token, setToken] = useState("");
  let navigate = useNavigate();

  const handleAuthLogin = (username, password) => {
    let pass = localStorage.getItem(username);
    if (!pass) return { error: "User not found. Kindly register" };
    if (JSON.parse(pass) === password) {
      setToken(username);
      localStorage.setItem("token", JSON.stringify(username));
      return { success: "successful!" };
    } else {
      return { error: "Wrong input, please try again" };
    }
  };
  const handleAuthRegister = (username, password) => {
    localStorage.setItem(username, JSON.stringify(password));
    navigate("/login", {
      state: {
        success: "User created successfully!",
      },
    });
  };
  const handleAuthLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/", {
      state: {
        success: "successfully logged out",
      },
    });
  };
  return (
    <Context.Provider
      value={{
        token,
        setToken,
        handleAuthLogin,
        handleAuthRegister,
        handleAuthLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default UserAuthContext;