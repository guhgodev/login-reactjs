import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useAuth } from "../../contexts/Auth/useAuth";

export const Login = () => {
  const auth = useAuth();
  //const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    try {
      await auth.authenticate(email, password);

      navigate("/profile");
    } catch (error) {
      alert("Invalid email or password");
    }
    /*
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Não deu certo");
      }
    }*/
  };
  return (
    <div>
      <h2>Página de Login</h2>
      <input
        type="text"
        value={email}
        onChange={handleEmailInput}
        placeholder="Digite seu e-mail"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordInput}
        placeholder="Digite sua senha"
      />

      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};
