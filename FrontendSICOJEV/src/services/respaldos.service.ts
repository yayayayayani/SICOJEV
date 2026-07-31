import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getRespaldos() {
  const response = await api.get(ENDPOINTS.RESPALDOS);

  return response.data;
}