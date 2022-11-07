import React, { useState } from "react";
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

function ErrorFallback({ error }) {
  return <ErrorApp error={error} />;
}

// const Context = React.createContext();

// export const AuthContext = React.createContext();
// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//         token:  null,
//       };
//     default:
//       return state;
//   }
// };

function App() {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  const [explode, setExplode] = useState(false);

  return (
    // <Context.Provider value={{
    //   token,
    //   handleInputChange,
    //   handleFormSubmit
    // }}>
    //   <Header />
      <div className="App">
        <ErrorBoundary
          fallbackComponent={ErrorFallback}
          onReset={() => setExplode(false)}
          resetKeys={[explode]}
        >
          {explode ? <ErrorApp /> : null}
          <AppRouter />
          <Header />
          <div className="errorDiv">
          <button onClick={() => setExplode(true)} className="errorButn"> toggle explode</button>
          <button onClick={() => setExplode(false)} className="errorButn">Go back</button>
          </div>
        </ErrorBoundary>
      </div>
  );
}

export default App;
