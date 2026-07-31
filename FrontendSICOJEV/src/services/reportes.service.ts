import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getReportes() {
  const response = await api.get(ENDPOINTS.REPORTES);

  return response.data;
}