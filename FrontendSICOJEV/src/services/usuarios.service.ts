import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getUsuarios() {
  const response = await api.get(ENDPOINTS.USUARIOS);

  return response.data;
}