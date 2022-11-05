// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";

// let Home = lazy(() => import("../pages/Home"));
// let About = lazy(() => import("../pages/About"));
// let ContactUs = lazy(() => import("../pages/ContactUs"));
// let ErrorPage = lazy(() => import("../pages/ErrorPage"));


const AppRouter = () => {
  <Routes>
    <switch>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contactUs" element={<ContactUs />} />
    <Route path="*" element={<ErrorPage />} />
    </switch>
  </Routes>;
};

export default AppRouter;
