import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  if (!localStorage.getItem("access_token")) {
    return <Navigate to="/login" />;
  }
  return children;
}
