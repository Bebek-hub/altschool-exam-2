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

function App() {
  const [explode, setExplode] = useState(false);

  return (
    <div className="App">
      <ErrorBoundary
        fallbackComponent={ErrorFallback}
        onReset={() => setExplode(false)}
        resetKeys={[explode]}
      >
        {explode ? <ErrorApp /> : null}
        <Header />
        <AppRouter />
        <div className="errorDiv">
          <button onClick={() => setExplode(true)} className="errorButn">
            {" "}
            toggle explode
          </button>
          <button onClick={() => setExplode(false)} className="errorButn">
            Go back
          </button>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
