 import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import HomePage from "../components/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes