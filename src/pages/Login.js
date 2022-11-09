import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  let location = useLocation();
  let success = location.state?.success;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleAuthLogin } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/login", { state: undefined });
    }
  }, [navigate, success]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await handleAuthLogin(email, password);
    if (res.success) {
      return <p>Congratulations!</p>;
      //   setEmail("");
      //   setPassword("");
    } else {
      console.log(res.error);
      return <p>Sorry, An error</p>;
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>

            <label htmlFor="email">
              Email Address
              <input
                type="text"
                required
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
              />
            </label>

            <label htmlFor="password">
              Password
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
              />
            </label>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
