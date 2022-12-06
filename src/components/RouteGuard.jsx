import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";

function RouteGuard({ element, path }) {
  function isAuth() {
    return localStorage.getItem("token") === "true";
  }
  return isAuth() ? <Outlet /> : <Navigate to={{ pathname: "/login" }} />;
}

export default RouteGuard;
