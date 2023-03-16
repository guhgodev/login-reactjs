import axios from "axios";
import { IUser } from "../types/User";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}
//export const useApi = () => ({
/*validateToken: async (token: string) => {
    const response = await api.post("/validate", { token });
    return response.data;
  },*/
export const LoginRequest = async (email: string, password: string) => {
  try {
    const request = await api.post("/login", { email, password });
    return request.data;
  } catch (err) {
    return null;
  }
};
/* return {
      user: { id: 3, name: "José", email: "josé@gmail.com" },
      token: "123456789",
    };
    const response = await api.post("/signin", { email, password });
    return response.data;
  },*/
/*logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
*/

api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();

    config.headers.Authorization = user?.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
