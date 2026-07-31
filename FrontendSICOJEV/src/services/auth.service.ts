import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function login(usuario: string, password: string) {
  const response = await api.post(`${ENDPOINTS.AUTH}/login`, {
    usuario,
    password,
  });

  return response.data;
}