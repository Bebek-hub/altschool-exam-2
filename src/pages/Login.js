import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export const Login = () => {
    const Login = () => {
        let location = useLocation();
        let success = location.state?.success;
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const { handleAuthLogin } = useAuth();
        let navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  useEffect(() => {
    if (success) {
      navigate("/login", { state: undefined });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await handleAuthLogin(email, password);
    if (res.success) {
      return(<p>Congratulations!</p> );
      setemail("");
      setPassword("");
    } else {
      console.log(res.error);
      return(<p>Sorry, An error</p> );
    }
  };
    
// const [data, setData] = React.useState(initialState);
// const handleInputChange = event => {
//     setData({
//       ...data,
//       [event.target.name]: event.target.value
//     });
//   };
// const handleFormSubmit = event => {
//     event.preventDefault();
//     setData({
//       ...data,
//       isSubmitting: true,
//       errorMessage: null
//     });
//     fetch("https://hookedbe.herokuapp.com/api/login", {
//       method: "post",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         email: data.email,
//         password: data.password
//       })
//     })
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw res;
//       })
//       .then(resJson => {
//         dispatch({
//             type: "LOGIN",
//             payload: resJson
//         })
//       })
//       .catch(error => {
//         setData({
//           ...data,
//           isSubmitting: false,
//           errorMessage: error.message || error.statusText
//         });
//       });
//   };
return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>

			<label for="email">
              Email Address
              <input
                type="text"
                required
              onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
              />
            </label>

			<label for="password">
              Password
              <input
                type="password"
                required
              onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
              />
            </label>

			{/* {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )} */}

           {/* <button disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                "Loading..."
              ) : (
                "Login"
              )}
            </button> */}

<button
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login