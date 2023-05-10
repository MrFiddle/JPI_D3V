import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import AboutMe from "./screens/AboutUs/AboutMe";

const RoutesAvailable = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  );
};

export default RoutesAvailable;
