import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getMovimientos() {
  const response = await api.get(ENDPOINTS.MOVIMIENTOS);

  return response.data;
}