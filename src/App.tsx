import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
//import { Private } from "./pages/Private";
//import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";
import ProtectedLayout from "./components/ProtectedLayout";
import { Login } from "./pages/Login";

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  /*const handleLogout = async () => {
    auth.signOut();
    window.location.href = window.location.href;
  };*/

  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
      </header>
      <hr />
      <Routes>
        <Route
          path="/profile"
          element={
            <ProtectedLayout>
              <h2> Perfil do Usuário</h2>
            </ProtectedLayout>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
