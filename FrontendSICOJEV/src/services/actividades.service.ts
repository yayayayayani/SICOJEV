import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getActividades() {
  const response = await api.get(ENDPOINTS.ACTIVIDADES);

  return response.data;
}