import { useEffect, useState } from "react";
import {
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage,
} from "../../hooks/useApi";
import { IAuthProvider, IUser } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  //const api = useApi();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }

    /*
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");

      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };*/
    //validateToken();
  }, []);

  const authenticate = async (email: string, password: string) => {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
    /*
    const data = await api.signIn(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false; 
    */
  };

  const logout = async () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
