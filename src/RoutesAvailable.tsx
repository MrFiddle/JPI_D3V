import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";

const RoutesAvailable = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesAvailable;
