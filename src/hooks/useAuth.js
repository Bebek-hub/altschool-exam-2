import { useContext } from "react";
import { Context } from "../context/AuthContext";

const useAuth = () => {
  const {
    token,
    setToken,
    handleAuthLogin,
    handleAuthRegister,
    handleAuthLogout,
  } = useContext(Context);
  return {
    token,
    setToken,
    handleAuthLogin,
    handleAuthRegister,
    handleAuthLogout,
  };
};

export default useAuth;