import React from "react";
import { Route, Routes } from "react-router-dom"
const Login =  React.lazy((() => import('remote-app/Login')));

const PortalUiHostAppRoutes = () =>{
    return (
    <Routes>
    <Route path="/" element={<div>Welcome to the Portal UI Dashboard</div>} />
    <Route path="/login" element={<Login/>}/>
  </Routes>
);
};
export default PortalUiHostAppRoutes;