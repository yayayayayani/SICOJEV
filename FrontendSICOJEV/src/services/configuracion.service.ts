import api from "../api/axios";
import ENDPOINTS from "../api/endpoints";

export async function getConfiguracion() {
  const response = await api.get(ENDPOINTS.CONFIGURACION);

  return response.data;
}