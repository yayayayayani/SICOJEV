import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getDashboard() {
  const response = await api.get(ENDPOINTS.DASHBOARD);

  return response.data;
}