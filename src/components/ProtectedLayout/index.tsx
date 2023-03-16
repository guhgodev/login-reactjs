import React from "react";
import { useAuth } from "../../contexts/Auth/useAuth";

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>You Don't Have Acess</h1>;
  }
  return children;
};

export default ProtectedLayout;
